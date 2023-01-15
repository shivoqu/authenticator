import { MongoClient } from "mongodb";
import { checkPassword } from "./passHash";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;

export async function createUser({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const client = await clientPromise;
  const db = client.db("nextjs-auth");
  const collection = db.collection("users");

  if (await collection.findOne({ username }))
    throw new Error("Username is taken");
  const result = await collection.insertOne({ username, password });
  if (!result.insertedId) throw new Error("Insert failed");
  return result;
}

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const client = await clientPromise;
  const db = client.db("nextjs-auth");
  const collection = db.collection("users");

  const user = await collection.findOne({ username });
  if (!user) throw new Error("User not found");

  if (!(await checkPassword(password, user.password))) return false;

  return user;
}
