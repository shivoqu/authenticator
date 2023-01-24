"use client";
import { useState, useEffect } from 'react';
import UserForm from "../../../ui/UserForm";
import { CustomEvent } from "../../../types/Event";
import { useRouter } from "next/navigation";

export default function Login() {
  const [events, setEvents] = useState<CustomEvent[]>([]);

  const router = useRouter();

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    setEvents([...events, { id: events.length, type: type, message: message }]);
  };

  const login = (result: any) => {
    addEvent("POST", `User logged in as ${result.username}`);
    localStorage.setItem("user", JSON.stringify(result.user));
    localStorage.setItem("jwtAuth", result.token);
    router.refresh();
  };

  return <UserForm handleLogin={login} />;
}
