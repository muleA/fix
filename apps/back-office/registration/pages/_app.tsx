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

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  return (
    <>
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
          <OrganizationSelectorLayout>
            <Component {...pageProps} />
          </OrganizationSelectorLayout>
        }

        {(router.pathname != "/registration/login" && router.pathname != "/registration/organization-selector") &&
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        }
      </Provider>
    </>
  );
}

export default CustomApp;
