import React from 'react';
import { Link } from 'react-router-dom';

// Placeholder image data URI
const placeholderImage = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect x="1" y="1" width="198" height="198" stroke="%23000" stroke-width="2" fill="%23FF9900" /%3E%3C/svg%3E';

const Register1 = () => {
  return (
    <div className="register-container bg-cream min-h-screen flex flex-col items-center justify-center">
      {/* First Section */}
      <div className="w-full h-96 bg-sun mt-36 flex items-center justify-center mb-5">
        <div className="w-[300px] flex items-center justify-center">
          <img src={placeholderImage} alt="Placeholder" className="h-64 w-72 object-cover rounded-lg shadow-lg border-2 border-blue-500" />
        </div>
        {/* Right side: Text content */}
        <div className="w-[700px] p-8">
          <h1 className="text-9xl text-blue mb-0 font-header font-medium">Register Now</h1>
          <p className="text-lg text-gray-700 mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className='mt-60'>
          <Link to="/Volunteer">
            <button className="bg-blue text-cream py-2 px-10 rounded-full font-semibold hover:bg-rose-dark transition duration-300">
              Join as Volunteer
            </button>
          </Link>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-96 flex items-center justify-center">
        <div className="w-[800px] items-center justify-center">
          <div className="text-right">
            <h2 className="text-9xl text-blue mb-0 font-header font-medium">Third Section</h2>
            <p className="text-lg text-gray-700 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Link to="/Organization">
            <button className="bg-blue text-cream py-2 px-10 rounded-full font-semibold hover:bg-yellow-dark transition duration-300">
              Create Organization
            </button>
          </Link>
        </div>
        {/* Right side: Image */}
        <div className="w-[370px] flex items-center justify-center">
          <img src={placeholderImage} alt="Placeholder" className="h-64 w-72 object-cover rounded-lg shadow-lg border-2 border-blue-500" />
        </div>
      </div>
      <div className='h-28'></div>
    </div>
  );
};

export default Register1;
