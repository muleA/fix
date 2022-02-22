import { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../layouts/header';
import '../styles/tailwind.css';
import '../styles/scss/global.scss'
import '../shared/components/horizontal-scroll-menu.scss'
import { Provider } from 'react-redux';
import {store} from '../shared/store/app.store'
import '../public/i18n/i18n'
function CustomApp({ Component, pageProps }: AppProps) {
  const config=[
    {
      name:'Home',
      href:'/',
      active:true
    },
    {
      name:'Providers',
      href:'/department',
      active:true
    },
    {
      name:'Services',
      href:'/employee',
      active:true
    },
    {
      name:'My Application',
      href:'/user',
      active:true
    }
  ]
  return (
    <>
     <Provider store={store}>
     <Head>
        <title>Welcome to eservices!</title>
      </Head>
      <Header navigation={config}/>
      <main className="app">
        <Component {...pageProps} />
      </main>
     </Provider>
    </>
  );
}

export default CustomApp;
