import { NextApiRequest, NextApiResponse } from 'next';
import { createUser } from '../../lib/redis';
import { hashPassword, checkPassword } from '../../lib/passHash';


export default async function handler(req : NextApiRequest, res : NextApiResponse) {
    req.body.password = await hashPassword(req.body.password);
    const id = await createUser(req.body);    
    res.status(200).json({ id });

    
}