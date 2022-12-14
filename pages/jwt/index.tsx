import { useState } from "react";
import Message from "../../ui/Message";
import UserForm from '../../ui/UserForm';
import Wrapper from "../../ui/Wrapper";

function Jwt() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }

    return (
    <main className="flex h-screen bg-gradient-to-b from-neutral-900 to-indigo-900">
      <div className="left w-1/2">
        <h1 className="text-center text-gray-300 font-bold text-3xl">JWT Authentication</h1>
        {/* display login form if not logged in */}
        {!isLoggedIn && <UserForm handleLogin={handleLogin}/>}

        { isLoggedIn && <Wrapper><Message type="success">Logged In successfully</Message></Wrapper>}
      </div>
      <div className="right w-1/2">
        <h1 className="text-3xl font-bold text-gray-300 text-center">Right Half</h1>
        <Wrapper></Wrapper>
      </div>
    </main>
  );
}

export default Jwt;
