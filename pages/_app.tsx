import { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container">
        <Component {...pageProps} />
      </div>
      <footer className="footer">
        <a
          href="https://showwcase.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Showwcase
        </a>
      </footer>
    </>
  );
}

export default MyApp;
