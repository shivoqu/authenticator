"use client";
import { useState } from "react";
import UserForm from "../../../ui/UserForm";
import { CustomEvent } from "../../../types/Event";


export default function Login() {
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  const login = (result: any) => {
    addEvent("POST", `User logged in as ${result.username}`);
  };

  return <UserForm handleLogin={login} />;
}
