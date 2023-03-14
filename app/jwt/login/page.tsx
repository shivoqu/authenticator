"use client";
import { useState, useContext } from 'react';
import UserForm from "../../../ui/UserForm";
import { CustomEvent } from "../../../types/Event";
import { useRouter } from "next/navigation";
import UserContext from '../../../lib/res/context/user';
import { User } from '../../../types/User';
import EventsContext from '../../../lib/res/context/event';

export default function Login() {
  // const [events, setEvents] = useState<CustomEvent[]>([]);
  const { setUser } = useContext(UserContext);
  const { events, setEvents } = useContext(EventsContext);
  
  const router = useRouter();

  const addEvent = (
    type: "GET" | "POST" | "PUT" | "DELETE",
    message: string
  ) => {
    
    setEvents([...events, { id: events.length, type: type, message: message }]);
    console.log(events);
  };

  const login = (result: any) => {
    
    localStorage.setItem("user", JSON.stringify(result) );
    localStorage.setItem("auth", JSON.stringify({method: "jwt", token: result.token}));  
    
    addEvent("POST", `User logged in as ${result.username}`);
    router.refresh();
  };

  return <UserForm handleLogin={login} />;
  
}
