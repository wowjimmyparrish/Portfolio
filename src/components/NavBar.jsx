import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";

function NavBar() {
  const [nav, setNav] = useState(false);

  function handClick() {
    setNav(!nav);
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-end items-center px-4 bg-[#0a192f] text-gray-300">
      {/* Menu */}

      <ul className="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className=" hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500">
            <a
              href="https://www.linkedin.com/in/jthomasparrishjr/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              LinkedIn <FaLinkedinIn size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500">
            <a
              href="https://github.com/wowjimmyparrish"
              className="flex justify-between items-center w-full text-gray-300"
            >
              GitHub <FaGithub size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500">
            <a
              href="https://www.linkedin.com/in/jthomasparrishjr/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={20} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500">
            <a
              href="https://www.linkedin.com/in/jthomasparrishjr/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Resume <BsPersonLinesFill size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
