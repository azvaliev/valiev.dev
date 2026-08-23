#!/usr/bin/env node
/**
 * Local static server that mirrors the agent-facing Vercel contract:
 * - clean URLs
 * - Accept: text/markdown content negotiation
 * - Vary: Accept, Accept-Encoding
 * - HTTP 404 with a markdown recovery body
 * - noindex on /resume.docx
 */
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = Number(process.env.PORT || 8080);
const DIST = path.resolve(
  process.env.DIST || path.join(path.dirname(url.fileURLToPath(import.meta.url)), '..', 'dist')
);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  '.pdf': 'application/pdf',
};

function parseAccept(header) {
  if (!header) return [];
  return header.split(',').map((part) => {
    const [type, ...params] = part.trim().split(';');
    const qParam = params.find((p) => p.trim().startsWith('q='));
    const q = qParam ? Number.parseFloat(qParam.split('=')[1]) : 1;
    return { type: (type || '').trim().toLowerCase(), q: Number.isFinite(q) ? q : 1 };
  });
}

function qFor(parts, type) {
  const match = parts.filter((p) => p.type === type);
  if (!match.length) return 0;
  return Math.max(...match.map((p) => p.q));
}

function prefersMarkdown(acceptHeader) {
  const parts = parseAccept(acceptHeader);
  const md = qFor(parts, 'text/markdown');
  if (md <= 0) return false;
  const html = qFor(parts, 'text/html');
  const star = qFor(parts, '*/*');
  const textStar = qFor(parts, 'text/*');
  const htmlPref = Math.max(html, star, textStar);
  return md >= htmlPref || html === 0;
}

function wantsOnlyUnsupported(acceptHeader) {
  if (!acceptHeader) return false;
  const parts = parseAccept(acceptHeader).filter((p) => p.q > 0);
  if (!parts.length) return false;
  const named = parts.filter((p) => !p.type.endsWith('/*') && p.type !== '*/*');
  if (!named.length) return false;
  return named.every(
    (p) => !['text/html', 'text/markdown', 'text/plain', 'application/xml'].includes(p.type)
  );
}

function safeJoin(root, requestPath) {
  const decoded = decodeURIComponent(requestPath.split('?')[0]);
  const cleaned = path.posix.normalize(decoded).replace(/^(\.\.(\/|$))+/, '');
  const abs = path.resolve(root, '.' + cleaned);
  if (!abs.startsWith(root)) return null;
  return abs;
}

function fileExists(file) {
  try {
    return fs.statSync(file).isFile();
  } catch {
    return false;
  }
}

function resolveFile(requestPath, markdown) {
  let pathname = requestPath === '' ? '/' : requestPath;
  if (pathname.length > 1 && pathname.endsWith('/')) pathname = pathname.slice(0, -1);

  if (markdown) {
    if (pathname === '/') return path.join(DIST, 'index.md');
    const md = path.join(DIST, `${pathname}.md`);
    if (fileExists(md)) return md;
    const nested = safeJoin(DIST, pathname);
    if (nested && fileExists(nested) && nested.endsWith('.md')) return nested;
    return path.join(DIST, '404.md');
  }

  if (pathname === '/') return path.join(DIST, 'index.html');

  const direct = safeJoin(DIST, pathname);
  if (direct && fileExists(direct)) return direct;

  const html = safeJoin(DIST, `${pathname}.html`);
  if (html && fileExists(html)) return html;

  const index = safeJoin(DIST, path.join(pathname, 'index.html'));
  if (index && fileExists(index)) return index;

  return null;
}

function send(res, status, file, extra = {}) {
  const ext = path.extname(file).toLowerCase();
  const type = extra.contentType || MIME[ext] || 'application/octet-stream';
  const headers = {
    'Content-Type': type,
    Vary: 'Accept, Accept-Encoding',
    ...extra.headers,
  };
  if (file.endsWith('resume.docx')) {
    headers['X-Robots-Tag'] = 'noindex, nofollow';
  }
  if (file.endsWith('llms.txt') || file.endsWith('llms-full.txt')) {
    headers['Content-Type'] = 'text/markdown; charset=utf-8';
  }
  const body = fs.readFileSync(file);
  headers['Content-Length'] = String(body.length);
  res.writeHead(status, headers);
  res.end(body);
}

const server = http.createServer((req, res) => {
  try {
    const parsed = url.parse(req.url || '/');
    const requestPath = parsed.pathname || '/';
    const accept = req.headers.accept || '';

    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { Allow: 'GET, HEAD', Vary: 'Accept, Accept-Encoding' });
      res.end();
      return;
    }

    if (wantsOnlyUnsupported(accept) && !requestPath.includes('.')) {
      res.writeHead(406, {
        'Content-Type': 'text/plain; charset=utf-8',
        Vary: 'Accept, Accept-Encoding',
      });
      res.end('Not Acceptable. Available representations: text/html, text/markdown.\n');
      return;
    }

    const markdown = prefersMarkdown(accept);
    const file = resolveFile(requestPath, markdown);
    if (!file || !fileExists(file)) {
      const fallback = markdown ? path.join(DIST, '404.md') : path.join(DIST, '404.html');
      send(res, 404, fallback);
      return;
    }

    const basename = path.basename(file);
    const requestedThisFile =
      requestPath === `/${basename}` ||
      requestPath === basename ||
      requestPath.endsWith(`/${basename}`);
    const isFallback404 = basename === '404.md' || basename === '404.html';
    const status = isFallback404 && !requestedThisFile ? 404 : 200;
    send(res, status, file);
  } catch (err) {
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(String(err));
  }
});

server.listen(PORT, HOST, () => {
  console.log(`valiev.dev static preview on http://${HOST}:${PORT} (dist=${DIST})`);
});
