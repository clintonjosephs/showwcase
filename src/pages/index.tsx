import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postRequest } from '../helpers/calls';
import Person from '../models/person';
import styles from '../styles/Home.module.css';

const Home = () => {
  const router = useRouter();

  const nameRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = nameRef.current!.value.trim();

    if (userName.length === 0) {
      return;
    }

    const urlId = userName.replace(' ', '-').toLowerCase();
    const personToAdd = new Person(uuidv4(), userName, urlId);

    const response = await postRequest('/api/person_api', personToAdd);

    const data = await response.json();
    console.log(data);
    if (data.success) {
      router.push(`/education/${urlId}`);
    }
  };

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
      <h6 className={styles.title}>
        Hi there! Welcome to your education showcase.
      </h6>
      <div>
        <form className={styles.form} onSubmit={submitHandler}>
          <label htmlFor="name">
            Type your name and click "Enter" below to begin!
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="name"
            required
            maxLength={200}
            ref={nameRef}
          />
          <button type="submit">Enter</button>
        </form>
      </div>
    </>
  );
};

export default Home;
