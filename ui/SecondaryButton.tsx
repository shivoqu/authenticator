const SecondaryButton = ({
  name,
  onClick,
}: {
  name: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      className="px-6 font-bold py-2 text-lg transition-all duration-100
      bg-zinc-800/50 hover:bg-zinc-700/50 focus:bg-zinc-700/50
    text-white rounded-md"
      type="submit"
      name={name.toLowerCase()}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default SecondaryButton;
