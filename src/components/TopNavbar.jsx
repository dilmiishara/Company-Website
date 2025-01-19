import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const TopNavbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full bg-primary md:h-[101px] sm:h-[85px]">
      <div className="container mx-auto flex justify-between items-center py-6 px-4 lg:px-10">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-auto h-[40px] md:h-[50px]"
        />
        <ul className="hidden md:flex gap-4 lg:gap-7 text-white">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#services"
            className="cursor-pointer hover:text-gray-400"
          >
            SERVICES
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#about"
            className="cursor-pointer hover:text-gray-400"
          >
            ABOUT US
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#contact"
            className="cursor-pointer hover:text-gray-400"
          >
            CONTACT US
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#careers"
            className="cursor-pointer hover:text-gray-400"
          >
            CAREERS
          </a>
        </ul>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu}
          alt="Menu Icon"
          className="sm:hidden w-7 cursor-pointer"
        />
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.close}
            alt="Close Icon"
            className="w-6"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
          <a href="#Header" className="px-4 py-2 rounded-full inline-block">
            Home
          </a>
          <a href="#services" className="px-4 py-2 rounded-full inline-block">
            SERVICES
          </a>
          <a href="#about" className="px-4 py-2 rounded-full inline-block">
            ABOUT US
          </a>
          <a href="#contact" className="px-4 py-2 rounded-full inline-block">
            CONTACT US
          </a>
          <a href="#careers" className="px-4 py-2 rounded-full inline-block">
            CAREERS
          </a>
        </ul>
      </div>
    </div>
  );
};

export default TopNavbar;
