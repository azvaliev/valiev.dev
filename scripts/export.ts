import fs from 'fs';
import { execSync } from 'child_process';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Root from '../src/root';
import Home from '../src/pages/index';

const indexHTML = ReactDOMServer.renderToStaticMarkup(
  React.createElement(Root, null, React.createElement(Home))
);

if (!fs.existsSync('dist')) {
  console.info('making dist...');
  fs.mkdirSync('dist');
}

console.info('writing html');
fs.writeFileSync('dist/index.html', `<!DOCTYPE html>${indexHTML}`);

console.info('copying public');
execSync('cp -R public/* dist/');

console.info('yarn tailwind');
execSync('yarn tailwind', { stdio: 'inherit' });

console.info('done!');
