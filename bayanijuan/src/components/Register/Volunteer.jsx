import React from 'react';
import { Link } from 'react-router-dom'; 

const Volunteer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-10">
      <div className="mt-20 min-w-50 bg-sun shadow-md rounded-lg p-8">
        <h2 className="text-7xl font-medium mb-6 font-header text-center text-blue">Create an Account</h2>
        <form>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="first-name" className="mb-3 block text-base font-medium text-[#07074D]">
                  First Name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="e.g. John"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="last-name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="e.g. Doe"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="johndoe@example.com"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="address" className="mb-3 block text-base font-medium text-[#07074D]">
              Address
            </label>
            <input
              type="location"
              name="address"
              id="address"
              placeholder="Enter your address"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="city" className="mb-3 block text-base font-medium text-[#07074D]">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="City"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label htmlFor="post-code" className="mb-3 block text-base font-medium text-[#07074D]">
                  Post Code
                </label>
                <input
                  type="text"
                  name="post-code"
                  id="post-code"
                  placeholder="Post Code"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          
          <div className="mb-5">
            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
  
          <div>
            <button
              className="hover:shadow-form w-full rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account? <Link to="/login" className="text-blue font-bold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
