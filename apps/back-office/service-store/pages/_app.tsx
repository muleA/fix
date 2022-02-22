import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind/main.css';
import '../styles/tabler/main.scss';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title className="tw-text-red-900 bg-blue-lt">Welcome to service-store!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
