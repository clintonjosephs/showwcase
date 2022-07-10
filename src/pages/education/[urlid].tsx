import React, { useState } from 'react';
import Modal from 'react-modal';
import { GetServerSideProps } from 'next';
import styles from '../../styles/PersonEducation.module.css';
import Person from '../../models/person';
import {
  CloseConnection,
  connectEducation,
  connectPerson,
} from '../../db/connection';
import Head from 'next/head';
import EducationForm from '../../components/EducationForm';
import Institutions from '../../components/Institutions';
import EducationList from '../../components/EducationList';
import Education from '../../models/education';

Modal.setAppElement('#welcome');

const personEducation: React.FC<{ person: Person; education: Education[] }> = ({
  person,
  education,
}) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [eduData, setEducation] = useState(education);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const addEducation = (edu: Education) => {
    setEducation([edu, ...eduData]);
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
            onRequestClose={closeModal}
            contentLabel="Education Form"
            className={styles.modal}
            overlayClassName={styles.overlay}
          >
            <EducationForm closeModal={closeModal} personId={person._id} updateEducationData={addEducation}/>
          </Modal>
        </p>
      </section>
      <section className={styles.educationDetails}>
        <Institutions data={eduData} />
        <EducationList data={eduData} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { urlid } = context.params;
  const connectionObj = await connectPerson();
  const person = await connectionObj.collection.findOne({ url_id: urlid });

  CloseConnection(connectionObj.client);

  const educationConnectionObject = await connectEducation();
  const education = await educationConnectionObject.collection
    .find({ user_id: person._id })
    .toArray();

  CloseConnection(connectionObj.client);
  return {
    props: {
      person: person,
      education: education.map((history) => ({
        university: history.university,
        degree: history.degree,
        field_of_study: history.field_of_study,
        start_date: history.start_date,
        end_date: history.end_date,
        grade: history.grade,
        activities: history.activities,
        description: history.description,
        user_id: history.user_id,
      })),
    },
  };
};

export default personEducation;
