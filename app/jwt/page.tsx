"use client";
import { useState, useEffect } from "react";
import Message from "../../ui/Message";
import Wrapper from "../../ui/Wrapper";
import Button from "../../ui/Button";
import { CustomEvent } from "../../types/Event";
import { useRouter } from "next/navigation";

export default function Jwt() {
  const [token, setToken] = useState<string | null>(
    "to-do: display token here"
  );
  const [username, setUsername] = useState<string | null>(null);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const router = useRouter();

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "");
    const jwtAuth = localStorage.getItem("jwtAuth");
    setUsername(user?.username);
    setToken(jwtAuth);
    console.log(jwtAuth);
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
      router.refresh();
      localStorage.clear();
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
              <p className={"text-" + colorMap.get(index)} key={index}>
                {item}
              </p>
            ))}
          </Message>
        </div>
      </div>
    </Wrapper>
  );
}
