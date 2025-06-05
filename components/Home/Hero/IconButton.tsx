import React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  "aria-label": string;
  onClick?: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  "aria-label": ariaLabel,
  onClick,
  className = "",
}) => {
  return (
    <button
      aria-label={ariaLabel}
      onClick={onClick}
      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gray-300/60 bg-opacity-80 backdrop-blur-sm flex items-center justify-center text-white hover:bg-opacity-30 transition ${className}`}>
      {children}
    </button>
  );
};

export default IconButton;
