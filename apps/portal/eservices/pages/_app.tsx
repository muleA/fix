import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../layouts/header';
import '../styles/tailwind.css';
import '../styles/scss/global.scss';
import '../shared/components/scroll-menu/horizontal-scroll-menu.scss';
import { Provider } from 'react-redux';
import { store } from '../store/app.store';
import '../public/i18n/i18n';
import NextNProgress from 'nextjs-progressbar';
import { Container, SSRProvider } from 'react-bootstrap';
import { SessionProvider } from 'next-auth/react';
import { NextPage } from 'next';
import { ReactElement, ReactNode, useEffect } from 'react';
import Keycloak from 'next-auth/providers/keycloak';
import Auth from '../shared/utility/auth';
import { MantineProvider } from '@mantine/core';
import Footer from '../layouts/footer';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function CustomApp({
  Component,
  pageProps: { session, ...pageProps },
}): AppPropsWithLayout {
  const config = [
    {
      name: 'Home',
      href: '/',
      active: true,
      protected: false,
    },
    {
      name: 'Providers',
      href: '/providers',
      active: true,
      protected: false,
    },
    {
      name: 'Services',
      href: '/services',
      active: true,
      protected: false,
    },
    {
      name: 'My Application',
      href: '/my-application',
      active: true,
      protected: true,
    },
  ];

  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <>
      <SessionProvider session={session}>
        <Provider store={store}>
          <Head>
            <title>Welcome to eservices!</title>
          </Head>
          <MantineProvider
            withNormalizeCSS
            withGlobalStyles
            theme={{
              /** Put your mantine theme override here */
              colorScheme: 'light',
            }}
          >
            <NextNProgress color="#ffbe0b" />
            <div className='tw-bg-gray-100'>
            <Header navigation={config} />
            <Component {...pageProps}/>
            <Footer/>
            </div>
          </MantineProvider>
        </Provider>
      </SessionProvider>
    </>
  );
}

export default CustomApp;
