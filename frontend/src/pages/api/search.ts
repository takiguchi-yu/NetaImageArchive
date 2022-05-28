import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../utils/db';

type Data = {
  message: string,
  keyword: string | string[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    query: { q },
    method,
  } = req;

  const k = await db.collection('keywords').get();
  const ks = k.docs.map(entry => entry.data());
  console.log(ks);

  if (method?.toUpperCase() == 'GET') {
        res.status(200).json({ message: 'ok', keyword: q })
  }

  res.status(405).json({ message: 'Method Not Allowed', keyword: '' })
}
