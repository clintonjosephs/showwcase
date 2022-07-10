import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout';

import 'react-toastify/dist/ReactToastify.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
       <ToastContainer />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
