import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="application-name" content="MyApp" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>

    </Html>
  )
}
