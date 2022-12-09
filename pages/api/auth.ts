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
  console.log(username, password);
  
  
  const user = await login({ username, password });
  res.status(200).json({ user });
}
