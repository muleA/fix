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
import { MantineProvider } from '@mantine/core';
import Footer from '../layouts/footer';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr'
import { IncomingMessage } from 'http';
import cookie from 'cookie'
import ErrorBoundary from '../shared/components/error-boundary/error-boundary';


const keycloakCfg = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_ID,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_ID,
};

interface InitialProps {
  cookies: unknown;
}

function CustomApp({ Component, pageProps,cookies }: AppProps & InitialProps) {
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
  return (
    <>
   <ErrorBoundary>
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
           <ErrorBoundary>
           <Header navigation={config} />
           </ErrorBoundary>
            <Component {...pageProps} />
            <Footer />
          </div>
        </MantineProvider>
      </Provider>
    </SSRKeycloakProvider>
   </ErrorBoundary>
  </>
  );
}
function parseCookies(req?: IncomingMessage) {
  if (!req || !req?.headers) {
    return {}
  }
  return cookie.parse(req?.headers?.cookie || '')
}

CustomApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req),
  }
}
export default CustomApp;
