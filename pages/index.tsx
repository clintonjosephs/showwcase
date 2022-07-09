import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
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
          <form className={styles.form}>
            <label htmlFor="name">
              Type your name and click "Enter" below to begin!
            </label>
            <input type="text" placeholder="Your name" id="name" required maxLength={200} />
            <button type="submit">Enter</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Home;
