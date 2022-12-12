import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../lib/redis";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { username, password } = req.body;
    
  const isLoggedIn = await login({ username, password });
  if( await isLoggedIn )
    res.status(200).json({ isLoggedIn });
  else
    res.status(401).json({ error : "Invalid username or password" });
}
