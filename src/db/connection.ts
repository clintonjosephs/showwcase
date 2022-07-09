import { MongoClient, Db, Collection } from 'mongodb';

export const ConnectToDB = async (collectionName: string) => {
  const client: MongoClient = await MongoClient.connect(process.env.DB_CONN_STRING);
  const db: Db = client.db();
  const collection: Collection = db.collection(collectionName);

  return { collection, client };
};

export const CloseConnection = async (client: MongoClient) => {
  client.close();
};
