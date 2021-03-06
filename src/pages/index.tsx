import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { postRequest } from '../helpers/calls';
import Person from '../models/person';
import styles from '../styles/Home.module.css';

const Home = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const userName = nameRef.current!.value.trim();

    if (userName.length === 0) {
      return;
    }

    const urlId = userName.replace(' ', '-').toLowerCase();
    const personToAdd = new Person(uuidv4(), userName, urlId);

    const response = await postRequest('/api/person_api', personToAdd);

    const data = await response.json();
    if (data.success) {
      router.replace(`/education/${urlId}`);
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
            Type your name and click &#34;Enter&#34; below to begin!
          </label>
          <input
            type="text"
            placeholder="Your name"
            id="name"
            required
            maxLength={200}
            ref={nameRef}
          />
          {!loading ? (
            <button type="submit" className={styles.welcomeBtn}>
              Enter
            </button>
          ) : (
            <button type="button" className={styles.welcomeBtn}>
             Setting up your profile ...
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Home;