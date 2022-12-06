import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../lib/redis';


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    const id = await createUser(req.body);
    res.status(200).json({ id })
}