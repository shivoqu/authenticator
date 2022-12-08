import { Client, Entity, Schema } from 'redis-om';
import { checkPassword } from './passHash';

const client = new Client();

async function connect(){  
    if(!client.isOpen()){
        await client.open(process.env.REDIS_URL);
    }
}

class User extends Entity {}

let schema = new Schema(
    User,
    {
        username : { type : 'string'},
        password : { type : 'string'},
        isAdmin : { type : 'boolean'},
    },
    {
        dataStructure : 'JSON',
    }
);

export async function createUser(data : any) {
    await connect();
    const repo = client.fetchRepository(schema);
    const user = repo.createEntity(data);
    const id = await repo.save(user);
    
    return id;
    
}