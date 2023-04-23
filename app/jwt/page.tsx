"use client";
import { useState, useEffect, useContext } from "react";
import Message from "../../ui/Message";
import Wrapper from "../../ui/Wrapper";
import Button from "../../ui/Button";
import { useRouter } from "next/navigation";
import UserContext from "../../lib/res/context/user";
import EventsContext from "../../lib/res/context/event";

export default function Jwt() {
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  // const [events, setEvents] = useState<CustomEvent[]>([]);

  const { events, setEvents } = useContext(EventsContext);

  const router = useRouter();

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const { expiresAt, token, username } = JSON.parse(storedUser);
      if (expiresAt && Date.now() > expiresAt) {
        localStorage.removeItem("user");
        setUsername(null);
        setToken(null);
      } else {
        setUsername(username);
        setToken(token);
      }
    }
  }, []);

  const logout = () => {
    fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({}),
    }).then((res) => {
      if (res.ok) {
        setToken(null);
        setUsername(null);
        addEvent("POST", `User ${username} logged out`);
        router.refresh();
        localStorage.clear();
      }
    });
  };

  const colorMap = new Map([
    [0, "red-500"],
    [1, "blue-500"],
    [2, "yellow-500"],
  ]);

  // const create = () => {

  const mockResponse = {
    id: "1",
    createdOn: "2022-01-01",
    createdBy: "XXXXX",
  };

  return (
    <Wrapper>
      <div className="h-[27rem] flex flex-col w-full">
        <div className="my-2 gap-1 grid grid-cols-2 g-1">
          <Button type="secondary">Create</Button>
          <Button type="secondary">Update</Button>
        </div>
        <div className="flex flex-col gap-2 h-28">
          <Button type="secondary">Delete</Button>
          <Button onClick={logout}>Logout</Button>
        </div>
        <div className="bg-neutral-900 p-3 text-neutral-300 font-semibold rounded border border-l-4 border-1 border-neutral-500 mt-2">
          <ul className="inline-flex place-content-center gap-3 w-full">
            <li>id: {mockResponse.id}</li>
            <li>user: {mockResponse.createdBy}</li>
            <li>date: {mockResponse.createdOn}</li>
          </ul>
          
        </div>
        <div className="mt-auto">
          <Message type="success">
            <h3 className="text-lg ">Access token:</h3>
            {token?.split(".").map((item, index) => (
              <span className={"text-" + colorMap.get(index)} key={index}>
                {index !== 0 && <span className="text-white">.</span>}
                {item}
              </span>
            ))}
          </Message>
        </div>
      </div>
    </Wrapper>
  );
}
