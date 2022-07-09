import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// import store from '../redux-test/store';
import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}

export default MyApp;
