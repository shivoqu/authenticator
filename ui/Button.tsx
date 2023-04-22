import { ReactNode } from "react";

const Button = ({
  children,
  onClick,
  type = "primary",
}: {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "primary" | "secondary";
}) => {
  return (
    <button
      className={`px-6 w-full  py-2 text-lg
    ${
      type === "primary"
        ? `text-white   focus:outline-red-200 hover:py-3 focus:py-3 
      bg-gradient-to-r from-red-700 via-red-900 font-bold to-red-900 
      hover:from-red-900 hover:via-red-900 hover:to-red-700`
        : "text-neutral-50 font-semibold bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-700"
    }  transition-all duration-100
    
   rounded-md outline-offset-0 `}
      type="submit"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
