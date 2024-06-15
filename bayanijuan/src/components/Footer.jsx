import React from 'react';

const Footer = () => {
  return (
    <div className='w-full bg-blue py-10'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 px-4'>
        {/* Column 1: BayaniJuan Description and Social Links */}
        <div className='sm:col-span-5 col-span-10 md:col-span-1 space-y-3'>
          <h3 className='text-white text-6xl font-medium font-header'>BayaniJuan</h3>
          <p className='text-white text-sm'>
            BayaniJuan connects passionate volunteers with meaningful opportunities to contribute to various causes and organizations.
          </p>
          <div className='flex space-x-4'>
            <a href='#' className='text-white hover:text-gray-200 transition-colors duration-300'>
              Facebook
            </a>
            <a href='#' className='text-white hover:text-gray-200 transition-colors duration-300'>
              Twitter
            </a>
            <a href='#' className='text-white hover:text-gray-200 transition-colors duration-300'>
              Instagram
            </a>
          </div>
        </div>

        {/* Column 2: Causes */}
        <div className='sm:col-span-1 md:col-span-1 space-y-4 mx-4 md:mx-12'>
          <h3 className='text-white text-lg font-semibold'>Causes</h3>
          <ul className='text-white text-sm'>
            <li>Education</li>
            <li>Environment</li>
            <li>Healthcare</li>
            <li>Poverty</li>
            <li>Animal Welfare</li>
            <li>Community Development</li>
          </ul>
        </div>

        {/* Column 3: Company and Menus */}
        <div className='sm:col-span-1 md:col-span-1 space-y-4 mx-4 md:mx-12'>
          <h3 className='text-white text-lg font-semibold'>Company</h3>
          <ul className='text-white text-sm'>
            <li>About Us</li>
            <li>Our Team</li>
            <li>News</li>
            <li>Careers</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 4: Support */}
        <div className='sm:col-span-1 md:col-span-1 space-y-4 mx-4 md:mx-12'>
          <h3 className='text-white text-lg font-semibold'>Support</h3>
          <p className='text-white text-sm'>FAQs</p>
          <a href='#' className='text-white hover:text-gray-200 transition-colors duration-300'>
            Contact Us
          </a>
        </div>
      </div>

      {/* Copyright notice */}
      <div className="mt-8 text-center text-white text-sm">
        © {new Date().getFullYear()} BayaniJuan. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
