const Button = ({name, onClick} : { name : string, onClick : React.MouseEventHandler<HTMLButtonElement>} ) => {
  return (
    <button
      className="px-6 m-auto w-full font-bold py-2 text-lg
    hover:py-3 focus:py-3 transition-all duration-100
    bg-gradient-to-r from-red-700 via-red-900 to-red-900
  hover:from-red-900 hover:via-red-900 hover:to-red-700
  text-white rounded-md outline-offset-0  focus:outline-red-200"
      type="submit"
      name={name.toLowerCase()}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;