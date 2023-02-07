"use client";
import { useContext, useEffect, useState } from "react";
import Button from "../../ui/Button";
import Message from "../../ui/Message";
import Wrapper from "../../ui/Wrapper";
import Event from "../../ui/Event";
import { CustomEvent } from "../../types/Event";
import { NextPage } from "next";
import UserContext from "../../lib/user";

const Layout: NextPage<any> = ({
  children,
  cookie,
}: {
  children: React.ReactNode;
  cookie: any;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  useEffect(() => {      
    console.log("cookie", cookie);
  }, [cookie]);

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
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

  const consumedUser = useContext(UserContext);

  return (
    <section
      style={{ marginTop: "-4rem" }}
      className="flex justify-center h-screen items-center"
    >
      <p>{consumedUser.user}</p>
      <div className="left">
        <h1 className="text-center text-gray-300 font-bold text-3xl">
          JWT Authentication
        </h1>

        {children}

        {isLoggedIn && (
          <Wrapper>
            <div className="h-[27rem]">
              <Message type="success">
                Login token:
                <p>{token}</p>
              </Message>
              <Button name="Logout" onClick={logout} />
            </div>
          </Wrapper>
        )}
      </div>
      <div className="right">
        <h1 className="text-3xl font-bold text-gray-300 text-center">
          Event Log
        </h1>
        <Wrapper>
          <div className="h-[27rem] overflow-auto scrollbar scrollbar-thumb-neutral-700/50 scrollbar-thumb-rounded-md ">
            {events.length === 0 && (
              <p className="text-gray-300 text-lg">Events will show up here</p>
            )}

            {events.map((event) => (
              <Event key={event.id} type={event.type} message={event.message} />
            ))}
          </div>
        </Wrapper>
      </div>
    </section>
  );
};

export default Layout;