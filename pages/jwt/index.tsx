// import { getStaticProps } from "../users";
import styles from "../../styles/LoginCard.module.css";
import TextField from '@mui/material/TextField';

function Jwt() {
    return (
        <div tabIndex={0} className={styles.card}>
            <h1>JWT LOGO HERE</h1>
            <h2><span>JWT</span> Authentication</h2>

            <TextField 
                name="jwt-user-name" 
                id="jwt-user-name" 
                label="Username" 
                variant="outlined" 
                />

            <TextField 
                name="jwt-user-password" 
                id="jwt-user-password" 
                label="Password" 
                variant="outlined" 
                />    



            <p>
                JSON Web Token is a proposed Internet standard for creating 
                data with optional signature and/or optional encryption whose 
                payload holds JSON that asserts some number of claims. The tokens 
                are signed either using a private secret or a public/private key
            </p>

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