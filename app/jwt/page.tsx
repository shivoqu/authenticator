"use client";
import { useState } from "react";
import Message from "../../ui/Message";
import UserForm from "../../ui/UserForm";
import Wrapper from "../../ui/Wrapper";
import Event from "../../ui/Event";
import Button from "../../ui/Button";
import { CustomEvent } from "../../types/Event";

export default function Jwt() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>("asdlasdklasjdaslkdjaklsjdlaskdjaklsd");
  const [username, setUsername] = useState<string | null>(null);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  const login = (result: any) => {
    setToken(result.token);
    setUsername(result.username);
    setIsLoggedIn(true);
    addEvent("POST", `User logged in as ${result.username}`);
  };

  const logout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (res.ok) {
      setToken(null);
      setIsLoggedIn(false);
      setUsername(null);
      addEvent("POST", `User ${username} logged out`);
    } else {
      console.log("res not ok", res);
    }
  };

  return (
    <Wrapper>
      <div className="h-[27rem] flex flex-col w-full">
        <Button name="Logout" onClick={logout} />
        <div className="mt-auto">
          <Message type="success">
            <h3 className="text-lg ">Access token:</h3>
            <p>{token}</p>
          </Message>
        </div>
      </div>
    </Wrapper>
  );
}
