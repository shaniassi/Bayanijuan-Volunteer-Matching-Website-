import React, { useState } from "react";
import logo from '../assets/logo.png';
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Find Opportunities", link: "/" },
    { name: "Blog", link: "/" },
    { name: "Contact", link: "/" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-cream z-50'> {/* Added z-50 for stacking context */}
      <div className='md:px-10 py-3 px-7 md:flex justify-between items-center'>

        {/* Logo and Title */}
        <div className='flex items-center gap-2'>
          <img src={logo} alt="Logo" className='h-11 w-11 md:h-12 md:w-12 mr-2 md:mr-1' style={{ marginTop: '-7px' }} />
          <span className='font-header text-6xl font-medium text-blue cursor-pointer'>
            BayaniJuan
          </span>
        </div>

        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        {/* Nav Links */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static font-body text-blue left-0 w-full md:w-auto transition-all duration-500 ease-in ${
          isOpen ? "top-20 bg-white md:bg-transparent" : "top-[-490px]"
        } md:pl-0 pl-9`} style={{ zIndex: 49 }}> {/* Ensure menu stays below z-50 */}
          {Links.map((link, index) => (
            <li key={index} className="md:ml-8 text-lg md:my-0 my-7 font-semibold">
              <a href={link.link} className="hover:text-rose duration-500">
                {link.name}
              </a>
            </li>
          ))}
          <button className="bg-sun text-blue font-header px-6 md:ml-8 rounded-full items-center flex hover:bg-rose duration-500 md:static">
            <span className="text-4xl text-center mt-1">Register</span>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
