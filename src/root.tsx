import { PropsWithChildren } from "react";
import Navbar from "./components/navbar";
import './index.css';

function Root({ children }: PropsWithChildren): JSX.Element {
  return (
    <html>
      <head>
        <title>Azat Valiev - Software Engineer</title>
        <meta name="description" content={`
          Are you looking for a skilled Web Developer to build/improve your websites or applications?
          My name is Azat, and I've been doing just that for individuals and businesses for 4+ years
        `} />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
        />
        <meta charSet="utf-8" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />

        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Azat Valiev - React Developer"
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
      </head>
      <body>
        <Navbar />
        {children}
        <script defer src="https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js"></script>
      </body>
    </html>
  )
}

export default Root;
