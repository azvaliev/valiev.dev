import type { PropsWithChildren } from "react";
import {
  DESCRIPTION,
  IMAGE_PATH,
  OG_DESCRIPTION,
  PAGES,
  PERSON_NAME,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  canonicalUrl,
  jsonLdGraph,
} from "./lib/site";
import './index.css';

export type RootProps = PropsWithChildren<{
  path?: string;
  includeJsonLd?: boolean;
}>;

function Root({ children, path = '/', includeJsonLd = false }: RootProps): JSX.Element {
  const isNotFound = path === '/404';
  const page = PAGES.find((entry) => entry.path === path);
  const title = page?.title ?? `Not found — ${SITE_NAME}`;
  const description = page?.description || DESCRIPTION;
  const canonical = canonicalUrl(page?.path ?? '/');
  const markdownHref = absoluteUrl(`/${page?.markdownFile ?? '404.md'}`);
  const jsonLd = includeJsonLd ? JSON.stringify(jsonLdGraph()) : null;

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta charSet="utf-8" />

        <meta name="robots" content={isNotFound ? 'noindex, follow' : 'index, follow'} />
        <meta name="author" content={PERSON_NAME} />
        <meta name="application-name" content={SITE_NAME} />

        <link rel="canonical" href={canonical} />
        <link rel="alternate" type="text/markdown" href={markdownHref} />
        <link rel="describedby" href={`${SITE_URL}/llms.txt`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={OG_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:image" content={absoluteUrl(IMAGE_PATH)} />
        <meta property="og:url" content={canonical} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
        <meta
          name="apple-mobile-web-app-title"
          content={SITE_NAME}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/icons/browserconfig.xml"
        />
        <meta name="theme-color" content="#000000" />
        <link rel="preload" href="/fonts/everett-thin-webfont.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="preload" href="/fonts/everett-ultralight-webfont.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="preload" href="/fonts/everett-light-webfont.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="preload" href="/fonts/everett-regular-webfont.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="stylesheet" href="/app.css" />
        {jsonLd ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLd }}
          />
        ) : null}
      </head>
      <body>
        {children}
        <script async defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js" />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'everettthin';
            src: url('/fonts/everett-thin-webfont.woff2') format('woff2'),
                 url('/fonts/everett-thin-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'everettlight';
            src: url('/fonts/everett-light-webfont.woff2') format('woff2'),
                 url('/fonts/everett-light-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'everettultralight';
            src: url('/fonts/everett-ultralight-webfont.woff2') format('woff2'),
                 url('/fonts/everett-ultralight-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }

          @font-face {
            font-family: 'everettregular';
            src: url('/fonts/everett-regular-webfont.woff2') format('woff2'),
                 url('/fonts/everett-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `}} />
      </body>
    </html>
  )
}

export default Root;
