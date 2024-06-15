import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Organization = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-10">
      <div className="mt-20 min-w-50 bg-sun shadow-md rounded-lg p-8">
        <h2 className="text-7xl font-medium mb-6 font-header text-center text-blue">Create an Organization Account</h2>
        <form>
            <div class="mb-5">
                <label for="organization name" class="mb-3 block text-base font-medium text-[#07074D]">
                    Organization Name
                </label>
                <input type="text" name="organization name" id="email" placeholder="e.g. Your Company Name"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
              <div class="mb-5">
                  <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                      Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="yourcompany@example.com"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              
              

              <div class="mb-5">
                <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">
                    Password
                </label>
                <input type="password" name="email" id="email" placeholder="Enter your password"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>

            <div class="mb-5">
              <label for="password" class="mb-3 block text-base font-medium text-[#07074D]">
                  Confirm Password
              </label>
              <input type="password" name="email" id="email" placeholder="Confirm your password"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
          </div>

          <div class="-mx-3 flex flex-wrap">
            <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label for="contact person name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Contact Person Name
                    </label>
                    <input type="text" name="contact person name" id="date" placeholder="e.g. John"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
            <div class="w-full px-3 sm:w-1/2">
                <div class="mb-5">
                    <label for="contact person title" class="mb-3 block text-base font-medium text-[#07074D]">
                        Contact Person Title
                    </label>
                    <input type="text" name="contact person title" id="time" placeholder="e.g. Doe"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
            </div>
            </div>
            <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
            </div>
              
              
                <div>
                  <button
                      class="hover:shadow-form w-full rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none">
                      Next
                  </button>
              </div>
          </form>
        <div className="mt-4 text-center">
          <p>Already have an account? <Link to="/login" className="text-blue font-bold">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Organization;
