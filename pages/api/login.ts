import { NextApiRequest, NextApiResponse } from "next";
import { login } from "../../lib/mongodb";
import cookie from "cookie";

const jwt = require("jsonwebtoken");
const secret = "donttellanyone";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
  
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { username, password } = req.body;

  const isLoggedIn = await login({ username, password });

  if (isLoggedIn) {
    const expIn = "15m";
    const token : string = jwt.sign({ username }, secret, { expiresIn: expIn });

    res.setHeader(
      "Set-Cookie",
      cookie.serialize("jwtAuth", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        sameSite: "strict",
        maxAge: 60 * 15,
        path: "/",
      })
    );

    res.status(200).json({ username, token, expiresIn: expIn });
  } else res.status(401).json({ error: "Invalid username or password" });
}
