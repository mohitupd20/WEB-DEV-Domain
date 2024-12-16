"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowRight,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
const CodenexLogo="/codenexlogo.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="hidden md:flex justify-around items-center bg-[#D9D9D9]/10 backdrop-blur-[10px] h-[72px] px-4 text-white sticky top-0 z-50">
        {/* Image and Text Div */}
        <div className="flex items-center gap-[10px] w-[216px] h-[58px]">
          <Image
            src={CodenexLogo}
            alt="Codenex"
            width={58}
            height={58}
            className="object-contain w-[58px] h-[58px]"
          />
          <div className="w-[128px] h-[38px] text-white font-[600] text-[32px] leading-[38.4px] font-['Albert_Sans']">
            CodeNex
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-between w-[376px] h-[49px] gap-[24px]">
          <Link
            href="/"
            className="flex items-center justify-center w-[67px] h-[29px] font-['Albert_Sans'] text-white font-[400] text-[24px] leading-[28.8px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="flex items-center justify-center w-[67px] h-[29px] font-['Albert_Sans'] text-white font-[400] text-[24px] leading-[28.8px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-200"
          >
            About
          </Link>
          <Link
            href="/team"
            className="flex items-center justify-center w-[67px] h-[29px] font-['Albert_Sans'] text-white font-[400] text-[24px] leading-[28.8px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-200"
          >
            Team
          </Link>
          <Link
            href="/events"
            className="flex items-center justify-center w-[67px] h-[29px] font-['Albert_Sans'] text-white font-[400] text-[24px] leading-[28.8px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-200"
          >
            Events
          </Link>
        </div>

        {/* Contact Link */}
        <div className="flex items-center justify-around w-[135px] h-[49px]">
          <Link
            href="/contact"
            className="flex items-center justify-center w-[67px] h-[29px] font-['Albert_Sans'] text-white font-[600] text-[24px] leading-[28.8px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all after:duration-200"
          >
            Contact
          </Link>
          <div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="ml-1 w-5 h-5"
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden flex justify-between items-center bg-[#D9D9D9]/10 backdrop-blur-[10px] h-[72px] px-4 text-white sticky top-0 z-50">
        {/* Mobile Logo and Name */}
        <div className="flex items-center gap-[10px]">
          <Image
            src={CodenexLogo}
            alt="CodeNex"
            width={20}
            height={20}
            className="object-contain w-[48px] h-[48px]"
          />
          <div className="text-white font-[600] text-[24px] leading-[38.4px] font-['Albert_Sans']">
            CodeNex
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="z-50">
          <FontAwesomeIcon
            icon={isOpen ? faTimes : faBars}
            className="w-6 h-6 text-white"
          />
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-black z-40 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-8 ">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-white text-2xl hover:text-gray-300 font-['Albert_Sans'] "
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={toggleMenu}
                className="text-white text-2xl hover:text-gray-300 font-['Albert_Sans']"
              >
                About
              </Link>
              <Link
                href="/team"
                onClick={toggleMenu}
                className="text-white text-2xl hover:text-gray-300 font-['Albert_Sans']"
              >
                Team
              </Link>
              <Link
                href="/events"
                onClick={toggleMenu}
                className="text-white text-2xl hover:text-gray-300 font-['Albert_Sans']"
              >
                Events
              </Link>
              <Link
                href="/contact"
                onClick={toggleMenu}
                className="flex items-center justify-around text-white text-2xl hover:text-gray-300 font-['Albert_Sans']"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
