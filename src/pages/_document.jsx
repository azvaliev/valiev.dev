import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <style dangerouslySetInnerHTML={{ __html: `
          @font-face {
            font-family: 'everettthin';
            src: url('/fonts/everett-thin-webfont.woff2') format('woff2'),
                 url('/fonts/everett-thin-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'everettlight';
            src: url('/fonts/everett-light-webfont.woff2') format('woff2'),
                 url('/fonts/everett-light-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'everettultralight';
            src: url('/fonts/everett-ultralight-webfont.woff2') format('woff2'),
                 url('/fonts/everett-ultralight-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'everettmedium';
            src: url('/fonts/everett-medium-webfont.woff2') format('woff2'),
                 url('/fonts/everett-medium-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }

          @font-face {
            font-family: 'everettregular';
            src: url('/fonts/everett-regular-webfont.woff2') format('woff2'),
                 url('/fonts/everett-regular-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
          }
        `}} />
      </body>
    </Html>
  )
}
