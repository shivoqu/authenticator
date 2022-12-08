export default function UserForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch("/api/users", {
      body: JSON.stringify(formData),
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <form
      className="mt-4 m-auto border border-gray-300/25 rounded-lg shadow-md max-w-lg px-8 pt-6 pb-8 mb-4 bg-gray-900"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-300 text-md font-medium mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="bg-gray-800/50 shadow border text-md border-gray-300/50 
          rounded-md px-4 py-3 w-full text-gray-300 leading-tight  focus:border-transparent"
          id="username"
          type="text"
          name="username"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-300 text-md font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="bg-gray-800/50 shadow border text-md border-gray-300/50 
          rounded-md px-4 py-3 w-full text-gray-300 leading-tight  focus:border-transparent"
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
      <div className="flex w-full">
        <button
          className="px-6 m-auto w-full font-bold py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-blue-700 text-white rounded-md outline-offset-0  focus:outline-blue-500"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
