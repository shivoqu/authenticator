// import { getStaticProps } from "../users";
import styles from "../../styles/LoginCard.module.css";
import UserForm from "../../lib/UserForm";

function Jwt() {
    return (
        <div tabIndex={0} className={styles.card}>
            <h1><span>JWT</span> Authentication</h1>

            <UserForm />

        </div>

    )
}

export default Jwt;

//////////////////////for later reference

// export const getStaticProps = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     const data = await res.json();

//     return {
//         props: {
//             users: data
//         }
//     }
// }