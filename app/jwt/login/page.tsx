"use client";
import { useState } from "react";
import UserForm from "../../../ui/UserForm";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null>(null);
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    // setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  const login = (result: any) => {
    setToken(result.token);
    setUsername(result.username);
    setIsLoggedIn(true);
    addEvent("POST", `User logged in as ${result.username}`);
  };
  return <UserForm handleLogin={login} />;
}
