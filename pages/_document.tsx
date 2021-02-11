import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import metadata from '../data/settings.json'

declare global {
  interface Window {
    dataLayer: any
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en" className="bg-primaryBlack">
        <Head>
          <meta name="description" content={metadata.site_description} />
          <meta name="keywords" content={metadata.site_keywords} />

          <meta property="og:title" content={metadata.site_title} />
          <meta property="og:description" content={metadata.site_description} />
          <meta property="og:image" content={metadata.thumbnail} />
          <meta property="og:url" content={metadata.base_url} />

          {/* Replace with your own */}
          <meta name="author" content="hamish.hossack" />
          <meta name="copyright" content="hamish.hossack" />

          {/* Google Analytics goes here */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-B5D475V3PR"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-B5D475V3PR');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
