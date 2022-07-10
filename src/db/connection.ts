import { MongoClient, Db, Collection } from 'mongodb';
import * as dotenv from 'dotenv';

export const ConnectToDB = async (collectionName: string) => {
  const client: MongoClient = await MongoClient.connect(process.env.DB_CONN_STRING);
  const db: Db = client.db();
  const collection: Collection = db.collection(collectionName);
  return { collection, client };
};

export const connectPerson = async () => {
  dotenv.config();
  const connectionObj = await ConnectToDB(process.env.USERS_COLLECTION_NAME);
  return connectionObj;
}

export const connectEducation = async () => {
  dotenv.config();
  const connectionObj = await ConnectToDB(process.env.EDUCATION_COLLECTION_NAME);
  return connectionObj;
}

export const CloseConnection = async (client: MongoClient) => {
  client.close();
};
