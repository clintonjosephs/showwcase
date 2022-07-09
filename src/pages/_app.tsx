import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Footer from '../components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </Provider>
  );
}

export default MyApp;
