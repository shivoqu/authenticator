import { Client, Entity, Schema } from "redis-om";
import { checkPassword } from "./passHash";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class User extends Entity {}

let schema = new Schema(
  User,
  {
    username: { type: "string" },
    password: { type: "string" },
    isAdmin: { type: "boolean" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createUser(data: any) {
  await connect();
  const repo = client.fetchRepository(schema);
  const user = repo.createEntity(data);
  const id = await repo.save(user);

  return id;
}

// create next api function to login user with redis
export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  await connect();
  const user = search(username);

  if (user) {
    // if (await checkPassword(password, user.password)) 
    return user;
  }
  return user;
}

function search(username: string) {
  const repo = client.fetchRepository(schema);
  const user = repo.search().where("username").eq(username).return;
  return user;
}
