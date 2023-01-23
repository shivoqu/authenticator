import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "../../lib/mongodb";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).send({ message: "Only GET requests allowed" });
  }

  try {

    const { jwtAuth } = req.cookies;
    if (!jwtAuth) {
        return res.status(401).json({ error: "Not authorized" });
    }

    const username = Object(jwt.decode(jwtAuth)).username;

    const user = await getUser(username);
    
    res.status(200).json({ user, jwtAuth });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
