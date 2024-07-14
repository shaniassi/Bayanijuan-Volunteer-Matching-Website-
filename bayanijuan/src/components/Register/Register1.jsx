import React from 'react';
import { Link } from 'react-router-dom';

const Register1 = () => {
  return (
    <div className="register-container bg-cream min-h-screen flex flex-col items-center justify-center">
      {/* First Section */}
      <div className="w-full h-auto lg:h-96 bg-sun mt-8 lg:mt-36 flex flex-col lg:flex-row items-center justify-center mb-5">
        {/* Left side: Image */}
        <div className="w-full lg:w-[300px] flex items-center justify-center mb-6 lg:mb-0 lg:mr-6">
          <img
            src="https://images.summitmedia-digital.com/spotph/images/places-to-volunteer_642.jpg"
            alt="Placeholder"
            className="h-64 w-full lg:w-72 object-cover rounded-lg shadow-lg border-2 border-blue-500"
          />
        </div>
        {/* Right side: Text content */}
        <div className="w-full lg:w-[700px] p-8">
          <h1 className="text-6xl lg:text-9xl text-blue mb-4 lg:mb-0 font-header font-medium text-center lg:text-left">
            Be a Hero!
          </h1>
          <p className="text-lg lg:text-lg text-gray-700 mb-6 lg:mb-10 text-center lg:text-left">
            Want to Volunteer? Find meaningful volunteer opportunities that align with your skills
            and interests. Contribute your unique talents and make a real impact in your community.
            Be part of a network of passionate individuals creating positive change in the
            Philippines.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to="/Volunteer">
              <button className="bg-blue text-cream py-2 px-8 lg:px-10 rounded-full font-semibold hover:bg-rose-dark transition duration-300">
                Register as Volunteer
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full h-auto lg:h-96 flex flex-col lg:flex-row items-center justify-center">
        {/* Left side: Text content */}
        <div className="w-full lg:w-[800px] p-8 lg:pl-16">
          <div className="text-center lg:text-right">
            <h2 className="text-6xl lg:text-9xl text-blue mb-4 lg:mb-0 font-header font-medium">
              Empower Your Cause!
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-6 lg:mb-10 text-center lg:text-right">
              Want to find volunteers? Empower your organization by finding the right volunteers to
              support your mission. Streamline your recruitment process, manage applications
              efficiently, and maximize your impact by connecting with skilled and dedicated
              volunteers.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Link to="/Organization">
              <button className="bg-blue text-cream py-2 px-8 lg:px-10 rounded-full font-semibold hover:bg-yellow-dark transition duration-300">
                Create Organization
              </button>
            </Link>
          </div>
        </div>
        {/* Right side: Image */}
        <div className="w-full lg:w-[370px] flex items-center justify-center mt-6 lg:mt-0">
          <img
            src="https://www.amnesty.org/en/wp-content/uploads/2022/04/GettyImages-97004996.jpg"
            alt="Placeholder"
            className="h-64 w-full lg:w-72 object-cover rounded-lg shadow-lg border-2 border-blue-500"
          />
        </div>
      </div>
      <div className="h-12 lg:h-28"></div>
    </div>
  );
};

export default Register1;
