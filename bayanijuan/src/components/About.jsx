import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for menu toggle

const About = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <div className='about-container bg-cream min-h-screen flex flex-col items-center justify-center py-16'>
      <div className='max-w-screen-lg w-full mx-auto py-12 px-4 flex flex-col md:flex-row'>
        {/* Menu Icon */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="w-7 h-7 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {isOpen ? <FaTimes className="text-2xl text-blue" /> : <FaBars className="text-2xl text-blue" />}
        </div>

        {/* Left side: Contents */}
        <div className='col-span-1 md:w-1/3 md:flex flex-col md:justify-start md:h-full'>
          <h2 className='text-6xl text-blue mb-0 font-header font-medium'>Contents</h2>
          <nav className={`toc ${isOpen ? 'block' : 'hidden'} md:block mt-4 md:mt-0 md:sticky md:top-16`}>
            <ul className='toc-links'>
              <li><a className='text-xl font-body my-3 sm:text-1xl' href='#about-us-header'>About Us</a></li>
              <li><a className='text-xl font-body my-3 sm:text-1xl' href='#mission-header'>Mission</a></li>
              <li><a className='text-xl font-body my-3 sm:text-1xl' href='#vision-header'>Vision</a></li>
              <li><a className='text-xl font-body my-3 sm:text-1xl' href='#team-members-header'>Team Members</a></li>
              <li><a className='text-xl font-body my-3 sm:text-1xl' href='#contact-info-header'>Contact Information</a></li>
            </ul>
          </nav>
        </div>

        {/* Right side: Content sections */}
        <div className='w-full md:w-2/3 ml-0 md:ml-10'>
          <section id='about-us'>
            <h1 style={{ color: '#922C40' }} className='text-6xl mb-0 font-header font-medium' id='about-us-header'>About Us</h1>
            <p className='text-xl font-body my-3 sm:text-1xl text-justify'>
              Welcome to BayaniJuan, your dedicated platform connecting passionate volunteers with organizations in need. We strive to empower individuals and communities through meaningful volunteer opportunities, fostering positive change one volunteer at a time.
            </p>
          </section>
          <section id='mission' className='mt-10'>
            <h2 style={{ color: '#922C40' }} className='text-5xl mb-0 font-header font-medium' id='mission-header'>Mission</h2>
            <p className='text-xl font-body my-3 sm:text-1xl text-justify'>
              Our mission is to bridge the gap between volunteers eager to contribute their time and skills, and organizations seeking dedicated support. By providing a seamless platform, we aim to inspire and facilitate impactful volunteerism that enriches lives and strengthens communities.
            </p>
          </section>
          <section id='vision' className='mt-10'>
            <h2 style={{ color: '#922C40' }} className='text-5xl text-922C40 mb-0 font-header font-medium' id='vision-header'>Vision</h2>
            <p className='text-xl font-body my-3 sm:text-1xl text-justify'>
              We envision a world where every individual can easily find fulfilling volunteer opportunities that align with their passions and skills. By promoting volunteerism as a powerful force for social good, we aim to build a more connected and compassionate society.
            </p>
          </section>
          <section id='team-members' className='mt-10'>
            <h1 style={{ color: '#922C40' }} className='text-6xl mb-0 font-header font-medium' id='team-members-header'>The Team</h1>
            <p className='text-xl font-body my-3 sm:text-1xl text-justify'>
              Meet the dedicated and passionate individuals behind BayaniJuan. Our team works tirelessly to connect volunteers with opportunities that make a meaningful impact on communities.
            </p>
            <div className='team-member flex items-center'>
              <span className="text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>Shania Faith Ramos</span>
              <span className="ml-5 text-xl font-body" style={{ fontFamily: 'Roboto' }}>Chief Executive Officer</span>
            </div>
            <div className='team-member flex items-center mt-2'>
              <span className="text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>Alleina Gracie Abad</span>
              <span className="ml-5 text-xl font-body" style={{ fontFamily: 'Roboto' }}>Development Lead</span>
            </div>
            <div className='team-member flex items-center mt-2'>
              <span className="text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>Eliana Dheys Ojeda</span>
              <span className="ml-5 text-xl font-body" style={{ fontFamily: 'Roboto' }}>Software Engineer</span>
            </div>
            <div className='team-member flex items-center mt-2'>
              <span className="text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>Allysa Saymo</span>
              <span className="ml-16 text-xl font-body" style={{ fontFamily: 'Roboto' }}>Technology Operations Field</span>
            </div>
          </section>
          <section id='contact-info' className='mt-10'>
            <h1 style={{ color: '#922C40' }} className='text-6xl mb-0 font-header font-medium' id='contact-info-header'>Contact</h1>
            <div className='team-member flex items-center'>
              <span className="text-xl font-body" style={{ fontFamily: 'Roboto' }}>Mailing Address</span>
              <span className="ml-5 text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>Brgy. 111 Sta. Mesa, Manila, Philippines</span>
            </div>
            <div className='team-member flex items-center'>
              <span className="text-xl font-body" style={{ fontFamily: 'Roboto' }}>Email Address</span>
              <span className="ml-9 text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>bayanijuan@gmail.com</span>
            </div>
            <div className='team-member flex items-center'>
              <span className="text-xl font-body" style={{ fontFamily: 'Roboto' }}>Contact Number</span>
              <span className="ml-5 text-xl font-body" style={{ color: '#922C40', fontFamily: 'Roboto' }}>(+61)1234-5678</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
