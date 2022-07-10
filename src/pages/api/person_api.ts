import type { NextApiRequest, NextApiResponse } from 'next';
import { CloseConnection, connectPerson } from '../../db/connection';


type ResponseData = {
  message: string;
  success: boolean;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const connectionObj = await connectPerson();
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
