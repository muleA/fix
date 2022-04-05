import { AppProps } from 'next/app';
import '../styles/tabler/main.scss';
import '../styles/tailwind/main.css';
import MainLayout from '../layouts/main-layout';
import Head from 'next/Head';
import NextNProgress from 'nextjs-progressbar';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { MantineProvider } from '@mantine/core';
import { store } from '../store/app.store';
import { Provider } from 'react-redux';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to-service-store</title>
        <meta name="description" content="welcome " />
      </Head>
      <SSRProvider>
        <Provider store={store}>
          <MantineProvider theme={{ loader: 'oval'  }}>
            <MainLayout>
              <NextNProgress height={6} color="#ffa500" />
              <Component {...pageProps} />
            </MainLayout>
          </MantineProvider>
        </Provider>
      </SSRProvider>
    </>
  );
}

export default CustomApp;
