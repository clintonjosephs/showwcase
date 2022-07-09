import { GetServerSideProps } from 'next';
import * as dotenv from 'dotenv';
import Person from '../../models/person';
import { CloseConnection, ConnectToDB } from '../../db/connection';

const personEducation: React.FC<{ person: Person }> = ({ person }) => {
  return (
    <div>
      <h6>Welcome to {`${person.name}'s`} education page</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        quidem, quisquam.
      </p>
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  dotenv.config();
  const { urlid } = context.params;
  const connectionObj = await ConnectToDB(process.env.USERS_COLLECTION_NAME);

  const person = await connectionObj.collection.findOne({ url_id: urlid });

  CloseConnection(connectionObj.client);
  return {
    props: {
      person: person,
    }
  };
};

export default personEducation;
