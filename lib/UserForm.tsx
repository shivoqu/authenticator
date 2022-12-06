export default function UserForm() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    console.log(formData);

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
      className="mt-4 m-auto rounded shadow-md max-w-xs px-8 pt-6 pb-8 mb-4 bg-gray-900"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label
          className="block text-gray-300 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow rounded px-3 py-2 w-full text-gray-700 leading-tight  focus:outline-blue-500"
          id="username"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
      </div>

      <div className="mb-6">
        <label
          className="block text-gray-300 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight  focus:outline-blue-500"
          type="password"
          name="password"
          placeholder="**********"
          required
        />
      </div>
      <div className="flex w-full text-right">
        <button
          className="px-6 mr-0 ml-auto font-bold py-2 bg-blue-500 hover:bg-blue-700 text-white rounded outline-offset-0  focus:outline-blue-500"
          type="submit"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
