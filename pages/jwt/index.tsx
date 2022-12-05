// import { getStaticProps } from "../users";
import UserForm from "../../lib/UserForm";

function Jwt() {
  return (
    <div className="flex w-full h-full">
      <div className="left w-1/2">
        <h1 className="text-center font-bold text-3xl">JWT Authentication</h1>
        <UserForm />
      </div>
      <div className="right w-1/2">
        <p className="text-3xl font-bold text-center">right half</p>
        <div className="mt-4 h-4/5 m-auto rounded shadow-md max-w-xs px-8 pt-6 pb-8 mb-4"></div>
      </div>
    </div>
  );
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
