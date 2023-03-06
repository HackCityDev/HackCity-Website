import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>HackCity Inc.</title>
        <meta
          name="title"
          content="Tech Innovation and Business Development Hub"
        />
        <meta
          name="description"
          content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex."
        />
        <meta
          name="keywords"
          content="HackCity/ hub / hack / city / education / crypto / javascript / python / innovation / technology / mobile app / development"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Stephen Olagbadun" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackcity.com/" />
        <meta property="og:title" content="HackCity Inc." />
        <meta
          property="og:description"
          content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hackcity.com/" />
        <meta property="twitter:title" content="HackCity Inc." />
        <meta
          property="twitter:description"
          content="Equipped with the resources to jumpstart your idea. Experienced software and business developers for all your needs, simple or complex."
        />
        <meta property="twitter:image" content="/favicon.png" />
        <link
          rel="android-chrome-192x192"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="android-chrome-512x512"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="icon" type="image/png" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
