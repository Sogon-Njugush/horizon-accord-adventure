import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonProps> = ({ children, className = "" }) => {
  return (
    <button
      className={`bg-[#1a40c7] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center space-x-2 sm:space-x-3 text-white text-sm font-normal hover:bg-[#113d48] transition ${className}`}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
