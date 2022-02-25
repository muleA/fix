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
import { SessionProvider } from "next-auth/react";
import ProtectedRoute from '../shared/utility/protected-route';

function CustomApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();

  return (
    <>
      <SessionProvider session={session}>
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
      </SessionProvider>
    </>
  );
}

export default CustomApp;
