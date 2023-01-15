"use client";
import { useState } from "react";
import Message from "../../ui/Message";
import UserForm from "../../ui/UserForm";
import Wrapper from "../../ui/Wrapper";
import Event from "../../ui/Event";

export default function Jwt() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const handleLogin = (token : string) => {
    setIsLoggedIn(true);
    setToken(token);
  };
  
  return (
    <section style={{marginTop: '-4rem'}} className="flex justify-center h-screen items-center">
      <div className="left">
        <h1 className="text-center text-gray-300 font-bold text-3xl">
          JWT Authentication
        </h1>
        {!isLoggedIn && <UserForm handleLogin={handleLogin} />}

        {isLoggedIn && (
          <Wrapper>
            <div className="h-96">
              <Message type="success">Login token: {token?.slice(0,32) + '...'}</Message>
            </div>
          </Wrapper>
        )}
      </div>
      <div className="right">
        <h1 className="text-3xl font-bold text-gray-300 text-center">
          Event Log
        </h1>
        <Wrapper>
          <div className="h-96 overflow-auto scrollbar scrollbar-thumb-violet-700/50 scrollbar-thumb-rounded-md ">
            <Event type="POST" message="signup with username and password" />
            <Event type="GET" message="user by username" />
            <Event type="delete" message="account by username and password" />
            <Event type="PUT" message="update account details" />
            <Event type="POST" message="signup with username and password" />
            <Event type="GET" message="user by username" />
            <Event type="delete" message="account by username and password" />
            <Event type="PUT" message="update account details" />
            <Event type="POST" message="signup with username and password" />
            <Event type="GET" message="user by username" />
            <Event type="delete" message="account by username and password" />
            <Event type="PUT" message="update account details" />
          </div>
        </Wrapper>
      </div>
    </section>
  );
}