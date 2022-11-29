import Link from 'next/link';
import styles from '../../styles/User.module.css';
import User from '../models/User';

export const getStaticProps = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const data = await res.json();

    return {
        props: {
            users: data
        }
    }
}

const Users = ({ users }: { users: User[] }) => {
    return (
        <div>
            <h1>All Users</h1>
            {users.map((user: any) => (
                <Link className={styles.link} 
                    href={'/users/' + user.id} 
                    key={user.id}>
                    <h3>{user.name}</h3>
                </Link>
            ))}
        </div>
    )
}

export default Users;