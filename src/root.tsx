import type { PropsWithChildren } from "react";
import Navbar from "./components/navbar";
import './index.css';

function Root({ children }: PropsWithChildren): JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Azat Valiev - Software Engineer</title>
        <meta name="description" content={`
          Are you looking for a skilled Software Engineer to build/improve your websites or applications?
          My name is Azat, and I've been doing just that for individuals and businesses for 4+ years
        `} />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta charSet="utf-8" />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Azat Valiev - Software Engineer"
        />
        <meta
          property="og:description"
          content="Full Stack Web Developer with 4+ years of experience"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/img/valievdev.png" />
        <meta property="og:url" content="https://valiev.dev" />

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
          content="Valiev Dev"
        />
        <meta name="application-name" content="Valiev Dev" />
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
