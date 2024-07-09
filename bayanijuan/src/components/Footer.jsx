{/*run ' npm install react-icons ' first if it is not working*/}

import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full bg-blue py-10'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-start'>
          {/* Column 1: BayaniJuan Description and Social Links */}
          <div className='space-y-3 mb-8 md:mb-0 md:w-1/3'>
            <h3 className='text-[#f3eac0] text-6xl font-medium font-header'>BayaniJuan</h3>
            <p className='text-[#f3eac0] text-sm font-body'>
              BayaniJuan connects passionate volunteers<br />
              with meaningful opportunities to contribute<br />
              to various causes and organizations.
            </p>
            <div className='flex space-x-4'>
              <a href='#' className='bg-[#f3eac0] text-blue p-2 rounded-full hover:bg-red-500 transition-colors duration-300'>
                <FaFacebookF />
              </a>
              <a href='#' className='bg-[#f3eac0] text-blue p-2 rounded-full hover:bg-red-500 transition-colors duration-300'>
                <FaTwitter />
              </a>
              <a href='#' className='bg-[#f3eac0] text-blue p-2 rounded-full hover:bg-red-500 transition-colors duration-300'>
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Wrapper to move the sections to the right */}
          <div className='flex flex-col md:flex-row justify-center md:justify-start md:ml-auto space-x-8 md:space-x-16'>
            {/* Column 2: Causes */}
            <div className='space-y-1'>
              <h3 className='text-[#f3eac0] text-4xl font-normal font-header mb-1'>Top Causes</h3>
              <ul className='text-[#f3eac0] text-sm font-body tracking-wide'>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Education</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Environment</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Healthcare</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Poverty</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Animal Welfare</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Community Development</li>
              </ul>
            </div>

            {/* Column 3: Company and Menus */}
            <div className='space-y-1'>
              <h3 className='text-[#f3eac0] text-4xl font-normal font-header mb-1'>Company</h3>
              <ul className='text-[#f3eac0] text-sm font-body tracking-wide'>
                <li className='hover:text-red-500 hover:underline transition duration-300'>About Us</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Our Team</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>News</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Careers</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Contact Us</li>
              </ul>
            </div>

            {/* Column 4: Support */}
            <div className='space-y-1'>
              <h3 className='text-[#f3eac0] text-4xl font-normal font-header mb-1'>Support</h3>
              <ul className='text-[#f3eac0] text-sm font-body tracking-wide'>
                <li className='hover:text-red-500 hover:underline transition duration-300'>FAQs</li>
                <li className='hover:text-red-500 hover:underline transition duration-300'>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="mt-8 text-center text-[#f3eac0] text-sm font-body">
        © {new Date().getFullYear()} BayaniJuan. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;

