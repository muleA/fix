import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tabler/main.scss';
import '../styles/tailwind/main.css';
import Layout from '../layout/layout';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to registration!</title>
      </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </> 
  );
}

export default CustomApp;
