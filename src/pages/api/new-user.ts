import type { NextApiRequest, NextApiResponse } from 'next'
import { CloseConnection, ConnectToDB } from '../../db/connection';
import * as dotenv from 'dotenv';

type ResponseData = {
  message: string;
  success: boolean;
}

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  dotenv.config();
  if (req.method === 'POST') {
    const connectionObj = await ConnectToDB(process.env.USERS_COLLECTION_NAME);
    const { body } = req;
    await connectionObj.collection.insertOne(body);
    CloseConnection(connectionObj.client);
    res.status(200).json({ message: 'User created successfully', success: true });
  }
}

export default handler;