"use client";
import { useState, useEffect } from "react";
import Message from "../../ui/Message";
import Wrapper from "../../ui/Wrapper";
import Event from "../../ui/Event";
import Button from "../../ui/Button";
import { CustomEvent } from "../../types/Event";

export default function Jwt() {
  const [token, setToken] = useState<string | null>(
    "to-do: display token here"
  );
  const [username, setUsername] = useState<string | null>(null);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch("/api/user", {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.ok) {
        const result = await res.json();
        setUsername(result.user.username);
        setToken(result.jwtAuth);
        addEvent("GET", `User ${result.username} fetched`);
      } else {
        console.log("res not ok", res.json());
      }
    };
    fetchUser();
  }, []);

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
      setUsername(null);
      addEvent("POST", `User ${username} logged out`);
    } else {
      console.log("res not ok", res);
    }
  };

  const colorMap = new Map([
    [0, "red-500"],
    [1, "blue-500"],
    [2, "yellow-500"],
  ]);

  return (
    <Wrapper>
      <div className="h-[27rem] flex flex-col w-full">
        <Button name="Logout" onClick={logout} />
        <div className="mt-auto">
          <Message type="success">
            <h3 className="text-lg ">Access token:</h3>
            {token?.split(".").map((item, index) => (
              <p className={'text-' + colorMap.get(index)} key={index}>{item}</p>
            ))}
          </Message>
        </div>
      </div>
    </Wrapper>
  );
}
