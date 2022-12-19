"use client";
import { useState } from "react";
import Message from "../../ui/Message";
import UserForm from "../../ui/UserForm";
import Wrapper from "../../ui/Wrapper";

function Jwt() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <div className="left w-1/2">
        <h1 className="text-center text-gray-300 font-bold text-3xl">
          JWT Authentication
        </h1>
        {/* display login form if not logged in */}
        {!isLoggedIn && <UserForm handleLogin={handleLogin} />}

        {isLoggedIn && (
          <Wrapper>
            <Message type="success">Logged In successfully</Message>
          </Wrapper>
        )}
      </div>
      <div className="right w-1/2">
        <h1 className="text-3xl font-bold text-gray-300 text-center">
          Event Log
        </h1>
        <Wrapper>
          <p className="text-gray-400 font-semibold">
            <span className="text-green">GET</span> user by username
          </p>
        </Wrapper>
      </div>
    </>
  );
}

export default Jwt;
