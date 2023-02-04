const SecondaryButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="px-6 font-bold text-lg transition-all duration-100
      bg-zinc-800/50 hover:bg-zinc-700/50 focus:bg-zinc-700/50
      text-white rounded-md h-12 text-start"
      type="submit"
      name={name.toLowerCase()}
      onClick={onClick}
    >
      {name === "+" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      )}

      {name === "-" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18 12H6"
          />
        </svg>
      )}
    </button>
  );
};

export default SecondaryButton;
