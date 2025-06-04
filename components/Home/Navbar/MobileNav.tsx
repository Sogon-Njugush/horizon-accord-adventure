"use client";
import { NavLinks } from "@/constant/constant";
import { X } from "lucide-react";
import React from "react";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
  return (
    <div>
      {/* Semi-transparent overlay with smooth backdrop blur */}
      <div
        className={`fixed inset-0 bg-gray-900/80 backdrop-blur-sm transition-all duration-500 z-[1002] ${navOpen}`}></div>

      {/* Navigation drawer with modern styling */}
      <div
        className={`${navOpen} fixed inset-y-0 left-0 flex flex-col justify-center h-full w-80 bg-gradient-to-b from-blue-700 via-blue-800 to-gray-900 shadow-2xl transform transition-all duration-500 ease-in-out z-[1050] px-8 py-12 space-y-6`}>
        {/* Navigation links with enhanced interaction */}
        {NavLinks.map((link) => (
          <a
            href={link.href}
            key={link.id}
            className="group relative px-6 py-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:shadow-md">
            <div className="flex items-center space-x-4">
              {/* Optional: Add icon placeholders here */}
              {/* <div className="w-6 h-6 bg-white/30 rounded-md"></div> */}
              <p className="text-white text-xl font-medium tracking-normal transition-all duration-300 group-hover:translate-x-2 group-hover:text-blue-100">
                {link.title}
              </p>
            </div>
            {/* Animated underline and accent bar */}
            <span className="absolute inset-x-6 bottom-3 h-[2px] bg-blue-400 transition-all duration-500 origin-left transform scale-x-0 group-hover:scale-x-90" />
            <span className="absolute left-0 top-1/2 w-1 h-8 -translate-y-1/2 bg-white rounded-r-full opacity-0 group-hover:opacity-100 transition-all duration-500" />
          </a>
        ))}

        {/* Optional: Add a close button or other navigation elements */}
        <button
          onClick={closeNav}
          className="absolute top-6 right-6 p-2 text-white/70 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MobileNav;
