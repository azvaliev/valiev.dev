import fs from 'fs';
import { execSync } from 'child_process';

import Root from '../../root';
import Home from '..';
import Portfolio from '../portfolio'

import ReactDOMServer from 'react-dom/server';
import type { NextApiRequest, NextApiResponse } from 'next';

async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const indexHTML = ReactDOMServer.renderToStaticMarkup(
    <Root>
      <Home />
    </Root>
  )

  const portfolioHTML = ReactDOMServer.renderToStaticMarkup(
    <Root>
      <Portfolio />
    </Root>
  )

  if (!fs.existsSync('dist')) {
    console.info('making dist...');
    execSync('mkdir dist');
  }

  console.info('writing html');
  fs.writeFileSync('dist/index.html', `<!DOCTYPE html>${indexHTML}`);
  fs.writeFileSync('dist/portfolio.html', `<!DOCTYPE html>${portfolioHTML}`);

  console.info('copying public');
  execSync('cp -R public/* dist/');

  console.info('yarn tailwind');
  execSync('yarn tailwind');

  console.info('done!');
  res.status(200).end()
}

export default handler;
