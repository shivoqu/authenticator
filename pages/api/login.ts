import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../lib/mongodb";

const jwt = require('jsonwebtoken');
const secret = 'donttellanyone';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { username, password } = req.body;
    
  const isLoggedIn = await login({ username, password });
  if( isLoggedIn ){
    const token = jwt.sign({ username }, secret, { expiresIn: '1h'} );
    res.status(200).json({ token });
  }
  else
    res.status(401).json({ error : "Invalid username or password" });
}
