import { GetStaticPaths } from 'next';
import User from '../models/User';

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    const paths = data.map((user: any) => {
        return {
            params: { id: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();

    return {
        props: { user: data }
    }
}

const UserDetails = ({ user }: { user: User }) => {
    return (
        <div>
            <h1>{user.name} Page</h1>
            <a>{user.website}</a>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </div>
    )
}

export default UserDetails;
