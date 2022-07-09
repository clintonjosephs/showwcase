import { GetServerSideProps } from 'next';
import styles from '../../styles/PersonEducation.module.css';
import Person from '../../models/person';
import { CloseConnection, connectPerson } from '../../db/connection';
import Head from 'next/head';

const personEducation: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <>
    <Head>
        <title>{ `${person.name} | Showwcase` }</title>
        <meta name="description" content="Explore educational background" />
    </Head>
    <section className={styles.heading}>
      <h5 className={styles.dynamicText}>Welcome to {`${person.name}'s`} education page</h5>
      <p>
       <button type="button" className={styles.button}>
          Add new education
       </button>
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
    }
  };
};

export default personEducation;
