import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from '@/components/functional/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta key="charset" name="charset" content="utf-8" />
        <meta
          key="viewport"
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=5"
        />
        <meta property="og:locale" content="ja_JP" />
        <meta property="og:type" content="website" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
