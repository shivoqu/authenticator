export default function Event({
  type,
  message,
}: {
  type: string;
  message: string;
}) {
  type = type.toUpperCase();

  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center justify-center w-8 h-8 bg-neutral-800 rounded-full">
       {/* checkamrk svg with dark gray background and grey tick */}
        <svg
          className="w-4 h-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>

      </div>
      <div className="ml-2">
        <p className="text-lg text-gray-400 font-semibold">
          <span
            className={
              type === "DELETE"
                ? "text-red-500"
                : type === "GET"
                ? "text-blue-500"
                : type === "PUT"
                ? "text-yellow-500"
                : "text-green-500"
            }
          >
            {type + " "}
          </span>
          {message}
        </p>
      </div>
    </div>
  );
}
