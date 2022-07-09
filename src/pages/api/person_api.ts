import type { NextApiRequest, NextApiResponse } from 'next';
import { CloseConnection, ConnectToDB } from '../../db/connection';
import * as dotenv from 'dotenv';

type ResponseData = {
  message: string;
  success: boolean;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  dotenv.config();
  const connectionObj = await ConnectToDB(process.env.USERS_COLLECTION_NAME);

  try {
    if (req.method === 'POST') {
      const { body } = req;
      await connectionObj.collection.insertOne(body);
      res
        .status(200)
        .json({ message: 'User created successfully', success: true });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message, success: false });
  } finally {
    CloseConnection(connectionObj.client);
  }
};

export default handler;
