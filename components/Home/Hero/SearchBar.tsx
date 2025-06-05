import { Clock, Flag, MapPin, Mountain, Search } from "lucide-react";
import React from "react";
import SearchField from "./SearchField";

const SearchBar = () => {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[90vw] max-w-6xl z-30 px-2 sm:px-0">
      <div className="relative">
        {/* Main container */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl border-2 border-blue-600/20 shadow-xl flex flex-col sm:flex-row justify-between items-stretch p-3 sm:p-4 gap-3 transition-all duration-300 hover:shadow-2xl">
          {/* Search fields - ensure they're clickable */}
          <div className="contents">
            <SearchField
              icon={MapPin}
              label="Destination"
              value="Select Destination"
            />
            <SearchField
              icon={Mountain}
              label="Type"
              value="Adventure"
              hasBorder
            />
            <SearchField
              icon={Clock}
              label="Duration"
              value="Duration"
              hasBorder
            />
            <SearchField
              icon={Flag}
              label="Tour Category"
              value="Luxury"
              hasBorder
            />
          </div>

          <button
            className="relative z-10 bg-[#1a40c7] text-white rounded-full px-6 sm:px-8 py-2.5 sm:py-3 flex items-center space-x-2 sm:space-x-3 min-w-[120px] sm:min-w-[140px] hover:bg-[#113d48] transition"
            onClick={(e) => {
              e.stopPropagation();
              console.log("Search clicked"); // Replace with actual search logic
            }}>
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-sm sm:text-base">Search</span>
          </button>
        </div>

        {/* Decorative bottom part - ensure it doesn't block clicks */}
        <div className="absolute -bottom-2 left-4 right-4 h-4 bg-gradient-to-t from-white/30 to-transparent pointer-events-none -z-10 rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default SearchBar;
