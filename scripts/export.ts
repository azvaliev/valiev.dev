import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../src/root';
import Home from '../src/pages/index';
import About from '../src/pages/about';
import Contact from '../src/pages/contact';
import Privacy from '../src/pages/privacy';
import Resume from '../src/pages/resume';
import NotFound from '../src/pages/not-found';
import { PAGES } from '../src/lib/site';
import {
  MARKDOWN_404,
  MARKDOWN_PAGES,
  llmsFullTxt,
  llmsTxt,
  robotsTxt,
  sitemapXml,
} from '../src/lib/markdown';

function render(pathName: string, page: React.ReactElement, includeJsonLd = false): string {
  return `<!DOCTYPE html>${ReactDOMServer.renderToStaticMarkup(
    React.createElement(Root, { path: pathName, includeJsonLd }, page)
  )}`;
}

function write(dist: string, file: string, contents: string) {
  const target = path.join(dist, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, contents);
}

const dist = 'dist';
if (!fs.existsSync(dist)) {
  console.info('making dist...');
  fs.mkdirSync(dist);
}

console.info('copying public');
execSync('cp -R public/* dist/');

console.info('writing html');
write(dist, 'index.html', render('/', React.createElement(Home), true));
write(dist, 'about.html', render('/about', React.createElement(About)));
write(dist, 'contact.html', render('/contact', React.createElement(Contact)));
write(dist, 'privacy.html', render('/privacy', React.createElement(Privacy)));
write(dist, 'resume.html', render('/resume', React.createElement(Resume)));
write(dist, '404.html', render('/404', React.createElement(NotFound)));

console.info('writing markdown and agent files');
for (const page of PAGES) {
  const markdown = MARKDOWN_PAGES[page.path];
  if (markdown) write(dist, page.markdownFile, markdown);
}
write(dist, '404.md', MARKDOWN_404);
write(dist, 'llms.txt', llmsTxt());
write(dist, 'llms-full.txt', llmsFullTxt());
write(dist, 'robots.txt', robotsTxt());

const lastmod = new Date().toISOString().slice(0, 10);
write(dist, 'sitemap.xml', sitemapXml(lastmod));

console.info('yarn tailwind');
execSync('yarn tailwind', { stdio: 'inherit' });

console.info('done!');
