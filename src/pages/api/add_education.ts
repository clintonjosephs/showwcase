import type { NextApiRequest, NextApiResponse } from 'next';
import { CloseConnection, connectEducation } from '../../db/connection';


type ResponseData = {
  message: string;
  success: boolean;
  id?: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  const connectionObj = await connectEducation();
  try {
    if (req.method === 'POST') {
      const { body } = req;
      const response = await connectionObj.collection.insertOne(body);
      res
        .status(200)
        .json({ message: 'Academic history successfully updated.', success: true, id: response.insertedId.toString() });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message, success: false });
  } finally {
    CloseConnection(connectionObj.client);
  }
};

export default handler;
