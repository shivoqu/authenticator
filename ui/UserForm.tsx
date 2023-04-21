import { useRef, useState } from "react";
import Button from "./Button";
import Message from "./Message";
import Wrapper from "./Wrapper";

export default function UserForm({ handleLogin }: any) {
  const formRef = useRef<any>();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState({ name: "", status: false });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(formRef.current);
    const formData = Object.fromEntries(form.entries());

    if (e.target.name === "signup") {
      setSuccess(false);
      setError(null);
      setLoading({ name: "signup", status: true });
      fetch("/api/signup", {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => (res.error ? setError(res.error) : setSuccess(true)))
        .then((res) => {
          setLoading({ name: "signup", status: false });
          console.log(res);
        })
        .catch((e) => console.log(e));
    } else if (e.target.name === "login") {
      setSuccess(false);
      setError(null);
      setLoading({ name: "login", status: true });
      fetch("/api/login", {
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json",
        },
        credentials: "include",
        method: "POST",
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.error) setError(res.error);
          else {
            setError(null);
            handleLogin(res);
          }
        })
        .then(() => setLoading({ name: "login", status: false }));
    }
  };

  return (
    <Wrapper>
      <form
        onSubmit={handleSubmit}
        className="h-[27rem]"
        ref={formRef}
        method="POST"
      >
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
        {success && (
          <Message type="success">{"Signed up successfully"}</Message>
        )}

        <div className="flex mt-8 w-full mb-2">
          <Button
            onClick={() => {
              formRef.current.name = "login";
            }}
          >
            {loading.name === "login" && loading.status ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Login"
            )}
          </Button>
        </div>

        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <p className="bg-neutral-900 px-2 text-gray-300">
              Or register a new account
            </p>
          </div>
        </div>

        <div className="flex w-full mb-2">
          <Button
            onClick={() => {
              formRef.current.name = "signup";
            }}
          >
            {loading.name === "signup" && loading.status ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              "Sign Up"
            )}
          </Button>
        </div>
      </form>
    </Wrapper>
  );
}
