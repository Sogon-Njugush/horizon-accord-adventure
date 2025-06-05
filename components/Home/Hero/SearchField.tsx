import { ChevronDown } from "lucide-react";
import React from "react";

interface SearchFieldProps {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  hasBorder?: boolean;
}

const SearchField: React.FC<SearchFieldProps> = ({
  icon: Icon,
  label,
  value,
  hasBorder = false,
}) => {
  return (
    <div
      className={`relative flex-1 flex items-center gap-3 ${
        hasBorder ? "sm:border-l sm:border-gray-200 sm:pl-4" : ""
      }`}>
      <Icon className="text-[#1a40c7] w-5 h-5 sm:w-6 sm:h-6" />
      <div className="text-xs sm:text-sm text-gray-700">
        <div>{label}</div>
        <div className="font-semibold flex items-center cursor-pointer select-none text-sm sm:text-base">
          {value}
          <ChevronDown className="ml-1 w-3 h-3 sm:w-4 sm:h-4" />
        </div>
      </div>
    </div>
  );
};

export default SearchField;
