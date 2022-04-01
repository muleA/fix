import { AppContext, AppProps } from 'next/app';
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
import cookie from 'cookie';
import { ReactElement, ReactNode, useEffect } from 'react';
import Keycloak from 'next-auth/providers/keycloak';
import Auth from '../shared/utility/auth';
import { MantineProvider } from '@mantine/core';
import Footer from '../layouts/footer';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr'
import { IncomingMessage } from 'http';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const keycloakCfg = {
  realm: 'eservice',
  url: process.env.NEXT_PUBLIC_KEYCLOAK_ISSUER,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_ID,
};

interface InitialProps {
  cookies: unknown;
}

function CustomApp({
  Component,
  pageProps,
  cookies,
}): AppPropsWithLayout & InitialProps {
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
      <SSRKeycloakProvider
        keycloakConfig={keycloakCfg}
        persistor={SSRCookies(cookies)}
      >
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
            <div className="tw-bg-gray-100">
              <Header navigation={config} />
              <Component {...pageProps} />
              <Footer />
            </div>
          </MantineProvider>
        </Provider>
      </SSRKeycloakProvider>
    </>
  );
}
function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {};
  }
  return cookie.parse(req.headers.cookie || '');
}

CustomApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  };
};

export default CustomApp;
