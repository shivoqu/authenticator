import { NextApiResponse } from "next";
import { NextRequest } from "next/server";
const jwt = require("jsonwebtoken");

export const middleware = (req: NextRequest, res: NextApiResponse) => {
  const jwtToken = req.cookies.get("jwtAuth")?.value;

  if (!jwtToken) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    const payload = jwt.verify(jwtToken, process.env.JWT_SECRET );
    console.log(payload);
    
  } catch (err) {
    return res.status(401).json({ error: "Not authorized" });
  }
};
