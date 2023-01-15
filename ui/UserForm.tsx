import { useRef, useState } from "react";
import Message from "./Message";
import Wrapper from "./Wrapper";

export default function UserForm({ handleLogin }: any) {
  const formRef = useRef<any>();
  const [error, setError] = useState(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const formData = Object.fromEntries(form.entries());

    if (e.target.name === "signup") {
      const res = await fetch("/api/signup", {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      (await result.error) ? setError(result.error) : setError(null);
      console.log(result);
    } else if (e.target.name === "login") {
      const res = await fetch("/api/login", {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      (await result.error) ? setError(result.error) : setError(null);

      if (!result.error) {
        handleLogin(result);
      }
    }
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="h-96 " ref={formRef}>
        <h2 className="text-2xl text-center text-gray-300 font-bold">
          Sign In
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-300 text-md font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-neutral-800/50 focus:bg-neutral-700/50
            shadow border text-md border-gray-300/50 rounded-md 
            px-4 py-3 w-full text-gray-300 leading-tight focus:border-transparent"
            type="text"
            name="username"
            autoComplete="username"
            required
          />
        </div>

        {error && <Message type="error">{error}</Message>}

        <div className="mb-4">
          <label
            className="block text-gray-300 text-md font-medium mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-neutral-800/50 focus:bg-neutral-700/50
            shadow border text-md border-gray-300/50 rounded-md 
            px-4 py-3 w-full text-gray-300 leading-tight focus:border-transparent"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
        </div>

        <div className="flex mt-8 w-full mb-2">
          <button
            className="px-6 m-auto w-full font-bold py-2 text-lg
            bg-gradient-to-r from-red-600 via-red-900 to-red-900
            hover:py-3 focus:py-3 transition-all duration-100
          text-white rounded-md outline-offset-0  focus:outline-red-200"
            type="submit"
            name="signup"
            onClick={(e) => (formRef.current.name = "signup")}
          >
            Sign Up
          </button>
        </div>
        <div className="flex w-full mb-2">
          <button
            className="px-6 m-auto w-full font-bold py-2 text-lg
            hover:py-3 focus:py-3 transition-all duration-100
            bg-gradient-to-r from-red-600 via-red-900 to-red-900
          text-white rounded-md outline-offset-0  focus:outline-red-200"
            type="submit"
            name="login"
            onClick={(e) => (formRef.current.name = "login")}
          >
            Login
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
