import React, { useState } from 'react';
import Modal from 'react-modal';
import { GetServerSideProps } from 'next';
import styles from '../../styles/PersonEducation.module.css';
import Person from '../../models/person';
import { CloseConnection, connectPerson } from '../../db/connection';
import Head from 'next/head';
import EducationForm from '../../components/EducationForm';

Modal.setAppElement('#welcome');

const personEducation: React.FC<{ person: Person }> = ({ person }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Head>
        <title>{`${person.name} | Showwcase`}</title>
        <meta name="description" content="Explore educational background" />
      </Head>
      <section className={styles.heading} id="welcome">
        <h5 className={styles.dynamicText}>
          Welcome to {`${person.name}'s`} education page
        </h5>
        <p>
          <button type="button" className={styles.button} onClick={openModal}>
            Add new education
          </button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Education Form"
            className={styles.modal}
            overlayClassName={styles.overlay}
          >
            <EducationForm closeModal={closeModal} />
          </Modal>
        </p>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { urlid } = context.params;
  const connectionObj = await connectPerson();
  const person = await connectionObj.collection.findOne({ url_id: urlid });

  CloseConnection(connectionObj.client);
  return {
    props: {
      person: person,
    },
  };
};

export default personEducation;
