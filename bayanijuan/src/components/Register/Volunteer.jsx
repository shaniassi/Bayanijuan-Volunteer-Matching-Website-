import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Volunteer = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-10">
      <div className="mt-20 min-w-50 bg-sun shadow-md rounded-lg p-8">
        <h2 className="text-7xl font-medium mb-6 font-header text-center text-blue">Create an Account</h2>
        <form>
        <div class="-mx-3 flex flex-wrap">
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                      <label for="first name" class="mb-3 block text-base font-medium text-[#07074D]">
                          First Name
                      </label>
                      <input type="text" name="date" id="date" placeholder="e.g. John"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
              </div>
              <div class="w-full px-3 sm:w-1/2">
                  <div class="mb-5">
                      <label for="last name" class="mb-3 block text-base font-medium text-[#07074D]">
                          Last Name
                      </label>
                      <input type="text" name="time" id="time" placeholder="e.g. Doe"
                          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
              </div>
          </div>
              <div class="mb-5">
                  <label for="email" class="mb-3 block text-base font-medium text-[#07074D]">
                      Email Address
                  </label>
                  <input type="email" name="email" id="email" placeholder="johndoe@example.com"
                      class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
              </div>
              <div class="mb-5">
                <label for="phone" class="mb-3 block text-base font-medium text-[#07074D]">
                    Phone Number
                </label>
                <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
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
              
              
  
              <div class="mb-5 pt-3">
                  <div class="mb-5">
                    <label for="address" class="mb-3 block text-base font-medium text-[#07074D]">
                        Address
                    </label>
                    <input type="location" name="email" id="email" placeholder="Enter your address"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                </div>
                  <div class="-mx-3 flex flex-wrap">
                    
                      <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                            <label for="city" class="mb-3 block text-base font-medium text-[#07074D]">
                              City
                          </label>
                              <input type="text" name="city" id="city" placeholder="City"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                      <div class="w-full px-3 sm:w-1/2">
                          <div class="mb-5">
                              <label for="post-code" class="mb-3 block text-base font-medium text-[#07074D]">
                                  Post Code
                              </label>
                              <input type="text" name="post-code" id="post-code" placeholder="Post Code"
                                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                          </div>
                      </div>
                  </div>
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

export default Volunteer;
