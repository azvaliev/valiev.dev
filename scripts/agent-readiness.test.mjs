import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { after, before, test } from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const PORT = 34567;
const BASE = `http://127.0.0.1:${PORT}`;

function request(urlPath, headers = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(
      `${BASE}${urlPath}`,
      { method: 'GET', headers },
      (res) => {
        const chunks = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          resolve({
            status: res.statusCode,
            headers: res.headers,
            body: Buffer.concat(chunks).toString('utf8'),
          });
        });
      }
    );
    req.on('error', reject);
    req.end();
  });
}

let child;

before(async () => {
  assert.ok(fs.existsSync(path.join(dist, 'index.html')), 'run yarn build before tests');
  child = spawn(process.execPath, [path.join(root, 'scripts/serve.mjs')], {
    env: { ...process.env, PORT: String(PORT), HOST: '127.0.0.1', DIST: dist },
    stdio: 'ignore',
  });
  for (let i = 0; i < 40; i++) {
    try {
      await request('/');
      return;
    } catch {
      await new Promise((r) => setTimeout(r, 50));
    }
  }
  throw new Error('server did not start');
});

after(() => {
  if (child) child.kill();
});

test('nonexistent paths return HTTP 404 with a markdown recovery body', async () => {
  const res = await request('/some-path-that-does-not-exist');
  assert.equal(res.status, 404);
  assert.match(res.body, /llms\.txt/);
  assert.match(res.body, /sitemap\.xml/);
  assert.match(res.body, /Not found/i);
});

test('markdown Accept negotiation on the homepage', async () => {
  const res = await request('/', { accept: 'text/markdown' });
  assert.equal(res.status, 200);
  assert.match(res.headers['content-type'], /text\/markdown/);
  assert.match(res.headers.vary || '', /Accept/);
  assert.match(res.body, /Azat Valiev/);
  assert.doesNotMatch(res.body, /<!DOCTYPE html>/i);
});

test('HTML Accept still returns the app page', async () => {
  const res = await request('/', { accept: 'text/html' });
  assert.equal(res.status, 200);
  assert.match(res.headers['content-type'], /text\/html/);
  assert.match(res.headers.vary || '', /Accept/);
  assert.match(res.body, /<!DOCTYPE html>/i);
});

test('q-values prefer markdown when it ranks higher', async () => {
  const res = await request('/', {
    accept: 'text/html;q=0.1, text/markdown;q=0.9',
  });
  assert.match(res.headers['content-type'], /text\/markdown/);
});

test('homepage includes JSON-LD, canonical, lang, og:image, og:type', async () => {
  const res = await request('/');
  assert.match(res.body, /<html lang="en">/);
  assert.match(res.body, /rel="canonical"/);
  assert.match(res.body, /https:\/\/valiev\.dev\/"/);
  assert.match(res.body, /application\/ld\+json/);
  assert.match(res.body, /"@type":"Person"/);
  assert.match(res.body, /"@type":"Organization"/);
  assert.match(res.body, /contactPoint/);
  assert.match(res.body, /PostalAddress/);
  assert.match(res.body, /"addressCountry":"US"/);
  assert.doesNotMatch(res.body, /"addressLocality"/);
  assert.doesNotMatch(res.body, /"addressRegion"/);
  assert.match(res.body, /property="og:image"/);
  assert.match(res.body, /property="og:type"/);
});

test('llms.txt includes when-to-use guidance', async () => {
  const res = await request('/llms.txt');
  assert.equal(res.status, 200);
  assert.match(res.body, /When to use this site/i);
  assert.match(res.body, /How an agent should call this site/i);
  assert.match(res.body, /Paywalls AI Editor/);
});

test('sitemap.xml lists indexable URLs with lastmod', async () => {
  const res = await request('/sitemap.xml');
  assert.equal(res.status, 200);
  assert.match(res.body, /<urlset/);
  assert.match(res.body, /https:\/\/valiev\.dev\/<\/loc>/);
  assert.match(res.body, /https:\/\/valiev\.dev\/about<\/loc>/);
  assert.match(res.body, /<lastmod>/);
});

test('trust pages exist with 500+ characters of content', async () => {
  for (const p of ['/about', '/contact', '/privacy']) {
    const res = await request(p);
    assert.equal(res.status, 200, p);
    const text = res.body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    assert.ok(text.length >= 500, `${p} extracted text was ${text.length}`);
  }
});

test('markdown resume stays under the agent token budget', async () => {
  const res = await request('/resume.md');
  assert.equal(res.status, 200);
  assert.ok(res.body.length < 100_000, `resume.md is ${res.body.length} bytes`);
  assert.match(res.body, /RevenueCat/);
});

test('resume.docx is noindexed so agents do not ingest the Word blob', async () => {
  const res = await request('/resume.docx');
  assert.equal(res.status, 200);
  assert.match(res.headers['x-robots-tag'] || '', /noindex/);
});

test('robots.txt points at the sitemap and blocks the docx', async () => {
  const res = await request('/robots.txt');
  assert.equal(res.status, 200);
  assert.match(res.body, /Sitemap: https:\/\/valiev\.dev\/sitemap.xml/);
  assert.match(res.body, /Disallow: \/resume\.docx/);
});
