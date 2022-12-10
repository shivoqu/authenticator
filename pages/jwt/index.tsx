import UserForm from "../../ui/UserForm";

function Jwt() {
    return (
    <main className="flex h-screen bg-gradient-to-b from-neutral-900 to-indigo-900">
      <div className="left w-1/2">
        <h1 className="text-center text-gray-300 font-bold text-3xl">JWT Authentication</h1>
        <UserForm />
      </div>
      <div className="right w-1/2">
        <h1 className="text-3xl font-bold text-gray-300 text-center">Right Half</h1>
        <div className="bg-gray-900 mt-4 h-72 m-auto rounded shadow-md max-w-xs px-8 pt-6 pb-8 mb-4"></div>
      </div>
    </main>
  );
}

export default Jwt;
