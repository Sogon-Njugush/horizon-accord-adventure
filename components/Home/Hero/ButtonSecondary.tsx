import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonProps> = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`border border-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 sm:space-x-3 text-white text-sm font-normal hover:bg-white hover:text-black transition mt-2 sm:mt-0 ${className}`}>
      {children}
    </button>
  );
};

export default ButtonSecondary;
