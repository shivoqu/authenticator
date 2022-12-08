import bcrypt from 'bcryptjs';

export function hashPassword(password : string) : Promise<string>{
    return bcrypt.hash(password, 10).then(function(hash:string){
        return hash;
    });
}

export function checkPassword(password : string, hashedPassword : string) : boolean{
    return bcrypt.compareSync(password, hashedPassword);
}