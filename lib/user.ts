"use client";
import { createContext } from "react";

const UserContext = createContext({ user: null, auth: null });

export default UserContext;
