import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* ── Favicon & App Icons ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1b17ff" />
        <meta name="msapplication-TileColor" content="#1b17ff" />

        {/* ── Fonts ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Default OG / Social ── */}
        <meta property="og:site_name" content="MCFALL Vending Services" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.mcfallvending.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="MCFALL Vending Services — Fully Managed Vending Solutions" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.mcfallvending.com/og-image.png" />

        {/* ── Additional SEO ── */}
        <meta name="author" content="MCFALL Vending Services" />
        <meta name="geo.region" content="GB-ESS" />
        <meta name="geo.placename" content="Harlow" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
