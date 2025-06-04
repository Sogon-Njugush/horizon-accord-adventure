"use client";
import { NavLinks } from "@/constant/constant";
import { Menu, MoveRight, TentTree } from "lucide-react";
import React, { useEffect, useState } from "react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    // fixed navbar
    <div
      className={`transition-all duration-300 h-[12vh] z-[100] w-full  ${
        navBg ? "fixed" : "bg-gray-50 shadow-md sticky top-0"
      } `}>
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[95%] mx-auto">
        {/* logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#104cba] flex items-center justify-center flex-col rounded-full">
            <TentTree className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold hidden sm:block md:text-2xl text-gray-900">
            Horizon Accord Adventures
          </h1>
        </div>
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-8">
          {NavLinks.map((link) => (
            <a
              href={link.href}
              key={link.id}
              className="relative group text-gray-800  hover:text-[#104cba] transition-all duration-300">
              <span className="block py-2 px-1 font-semibold">
                {link.title}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#104cba] transition-all duration-300 group-hover:w-full"></span>
              </span>
            </a>
          ))}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          <button className="relative px-6 py-3 bg-[#113d48] text-white rounded-3xl overflow-hidden group font-sans font-medium tracking-wide">
            <span className="relative z-10 flex items-center">
              Book Now
              <span className="ml-2">
                <MoveRight className="w-4 h-4" />
              </span>
            </span>
            <span className="absolute inset-0 bg-[#104cba] transform origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left transition-transform duration-300 ease-in-out"></span>
          </button>
        </div>
        {/* thumbnils */}
        <Menu
          onClick={openNav}
          className="w-8 h-8 text-gray-950 cursor-pointer lg:hidden"
        />
      </div>
    </div>
  );
};

export default Nav;
