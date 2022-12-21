import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "../../lib/redis";
import { hashPassword } from "../../lib/passHash";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  try{
    req.body.password = await hashPassword(req.body.password);
    const id = await createUser(req.body);
    res.status(200).json({ id });
  }
  catch(err : any){
    res.status(500).json({ error: err.message });
  }
}
