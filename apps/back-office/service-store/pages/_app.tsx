import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tailwind/main.css';
import '../styles/tabler/main.scss';
import { MantineProvider } from '@mantine/core';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title className="tw-text-red-900 bg-blue-lt">Welcome to service-store!</title>
      </Head>
      <MantineProvider>
      <main className="app">
        <Component {...pageProps} />
      </main>
      </MantineProvider>
    </>
  );
}

export default CustomApp;
