import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>React Avançado Boilerplate</title>
        <link rel="stylesheet" href="/img/icon-512.png/" />
        <link rel="apple-touch-icon" href="/img/icon-512.png/" />
        <meta
          name="description"
          content="a simple project started to work with TypeScript, React, Styled Components and NextJS"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
