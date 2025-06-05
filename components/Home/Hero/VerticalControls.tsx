import { ArrowDown, ArrowUp } from "lucide-react";
import React from "react";
import IconButton from "./IconButton";

interface VerticalControlsProps {
  onUp: () => void;
  onDown: () => void;
  currentIndex: number;
  totalItems: number;
}

const VerticalControls: React.FC<VerticalControlsProps> = ({
  onUp,
  onDown,
  currentIndex,
  totalItems,
}) => {
  return (
    <div className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 flex flex-col items-center gap-6 z-30">
      <IconButton aria-label="Previous image" onClick={onUp}>
        <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </IconButton>

      <div className="flex flex-col items-center">
        {Array.from({ length: totalItems }).map((_, index) => (
          <div
            key={index}
            className={`w-1 h-8 rounded-full my-2 ${
              index === currentIndex ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      <IconButton aria-label="Next image" onClick={onDown}>
        <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </IconButton>
    </div>
  );
};

export default VerticalControls;
