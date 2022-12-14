import { useRef, useState } from "react";
import Message from "./Message";
import Wrapper from "./Wrapper";

export default function UserForm({ handleLogin }: any) {
  const formRef = useRef<any>();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const formData = Object.fromEntries(form.entries());

    if (e.target.name === "signup") {
      const res = await fetch("/api/users", {
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
      const res = await fetch("/api/auth", {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
      });
      const result = await res.json();
      (await result.error) ? setError(result.error) : setError(null);
      // if no error, set isLoggedIn to true
      if (!result.error) {
        setSuccess(true);
        handleLogin();
      }

      console.log(result);
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <Wrapper>
        {/* if logged in display success */}
        {success && (
          <Message type="success">Login success</Message>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-300 text-md font-medium mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="bg-gray-800/50 shadow border text-md border-gray-300/50 
          rounded-md px-4 py-3 w-full text-gray-300 leading-tight focus:bg-gray-700/50 focus:border-transparent"
            type="text"
            name="username"
            required
          />
        </div>

        {error && (
          <Message type="error">{error}</Message>
        )}

        <div className="mb-4">
          <label
            className="block text-gray-300 text-md font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="bg-gray-800/50 shadow border text-md border-gray-300/50 
          rounded-md px-4 py-3 w-full text-gray-300 leading-tight  focus:border-transparent focus:bg-gray-700/50"
            type="password"
            name="password"
            required
          />
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <p className="bg-gray-900 px-2 text-gray-500">Or sign in with</p>
          </div>
        </div>
        <div className="flex w-full mb-2">
          <button
            className="px-6 m-auto w-full font-bold py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-700 
          text-white rounded-md outline-offset-0  focus:outline-blue-500"
            type="submit"
            name="signup"
            onClick={(e) => (formRef.current.name = "signup")}
          >
            Sign Up
          </button>
        </div>
        <div className="flex w-full mb-2">
          <button
            className="px-6 m-auto w-full font-bold py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-700 
          text-white rounded-md outline-offset-0  focus:outline-blue-500"
            type="submit"
            name="login"
            onClick={(e) => (formRef.current.name = "login")}
          >
            Login
          </button>
        </div>
      </Wrapper>
    </form>
  );
}
