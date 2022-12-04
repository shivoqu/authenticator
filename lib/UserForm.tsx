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
    <form className="bg-black" onSubmit={handleSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
}
