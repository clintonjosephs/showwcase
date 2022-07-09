import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Showwcase</title>
      <meta
        name="description"
        content="Welcome to showcase app, where you can network and showcase your skills and achievements as a software developer!!"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h6 className={styles.title}>
        Hi there! Welcome to your education showcase.
      </h6>

      <div>
        <span>Type your name and click "Enter" below to begin!</span>
      </div>
    </main>

    <footer className={styles.footer}>
      <a href="https://showwcase.com" target="_blank" rel="noopener noreferrer">
        Powered by Showwcase
      </a>
    </footer>
  </div>
);

export default Home;
