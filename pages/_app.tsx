import '~/style/base.scss';
import Head from 'next/head';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
