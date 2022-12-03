// import { getStaticProps } from "../users";
import styles from "../../styles/LoginCard.module.css";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import UserForm from "../../lib/UserForm";

function Jwt() {
    return (
        <div tabIndex={0} className={styles.card}>
            <h1><span>JWT</span> Authentication</h1>
{/* 
            <TextField
                name="jwt-user-name"
                id="jwt-user-name"
                label="Username"
                color="primary"
                variant="outlined"
                required
            />

            <TextField
                name="jwt-user-password"
                id="jwt-user-password"
                label="Password"
                color="primary"
                variant="outlined"
                required
            />


            <Button
                name="login"
                id="login"
                variant="contained"
                color="primary"
                size="large"
            >Login
            </Button> */}

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