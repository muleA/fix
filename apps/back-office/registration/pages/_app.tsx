import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/tabler/main.scss';
import '../styles/tailwind/main.css';
import { Provider } from 'react-redux';
import { store } from '../store/app.store';
import LoginLayout from '../layout/login-layout';
import OrganizationSelectorLayout from '../layout/organization-selector-layout';
import MainLayout from '../layout/main-layout';
import { useRouter } from 'next/router';
import cookie from 'cookie';
import type { AppContext } from 'next/app';
import type { IncomingMessage } from 'http';
import { SSRKeycloakProvider, SSRCookies } from '@react-keycloak/ssr';
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from '../shared/utility/protected-route';

const keycloakCfg = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID
}

interface InitialProps {
  cookies: unknown
}

function CustomApp({ Component, pageProps ,cookies }: AppProps & InitialProps) {
  const router = useRouter();

  return (
    <>
      <SSRKeycloakProvider keycloakConfig={keycloakCfg} persistor={SSRCookies(cookies)}  >
        {/* <SessionProvider session={session}> */}
        <Head>
          <title>Welcome to registration!</title>
        </Head>

        <Provider store={store}>

          {router.pathname == "/registration/login" &&
            <LoginLayout>
              <Component {...pageProps} />
            </LoginLayout>
          }

          {router.pathname == "/registration/organization-selector" &&
            <ProtectedRoute>
              <OrganizationSelectorLayout>
                <Component {...pageProps} />
              </OrganizationSelectorLayout>
            </ProtectedRoute>
          }

          {(router.pathname != "/registration/login" && router.pathname != "/registration/organization-selector") &&
            <ProtectedRoute>
              <MainLayout>
                <Component {...pageProps} />
              </MainLayout>
            </ProtectedRoute>
          }
        </Provider>
        {/* </SessionProvider> */}
      </SSRKeycloakProvider>
    </>
  );
}

function parseCookies(req?: IncomingMessage) {
  if (!req || !req.headers) {
    return {}
  }
  return cookie.parse(req.headers.cookie || '')
}

CustomApp.getInitialProps = async (context: AppContext) => {
  // Extract cookies from AppContext
  return {
    cookies: parseCookies(context?.ctx?.req)
  }
}

export default CustomApp;
