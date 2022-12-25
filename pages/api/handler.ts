import { NextApiRequest, NextApiResponse } from "next";

const { connectToDatabase } = require("../../lib/mongodb");
const ObjectId = require("mongodb").ObjectId;

export default async function handler({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  switch (req.method) {
    case "GET": {
      return getPosts(req, res);
    }

    case "POST": {
      return addPost(req, res);
    }

    case "PUT": {
      return updatePost(req, res);
    }

    case "DELETE": {
      return deletePost(req, res);
    }
  }
}

async function getPosts(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const posts = await db.collection("posts").find({}).toArray();
  res.status(200).json(posts);
}

async function addPost(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const post = await db.collection("posts").insertOne(req.body);
  res.status(200).json(post);
}

async function updatePost(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const post = await db
    .collection("posts")
    .updateOne(
      { _id: ObjectId(req.body.id) },
      { $set: { title: req.body.title, content: req.body.content } }
    );
  res.status(200).json(post);
}

async function deletePost(req: NextApiRequest, res: NextApiResponse) {
  const { db } = await connectToDatabase();
  const post = await db
    .collection("posts")
    .deleteOne({ _id: ObjectId(req.body.id) });
  res.status(200).json(post);
}
