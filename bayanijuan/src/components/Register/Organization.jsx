import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Organization = () => {
  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    contactPersonName: "",
    contactPersonTitle: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5010/organizationform', formData);
      console.log(response.data); // Log response from server
      // Handle success (e.g., clear form, show success message)
      setFormData({
        organizationName: "",
        email: "",
        contactPersonName: "",
        contactPersonTitle: "",
        phone: "",
        password: "",
      });
      alert('Organization registration submitted successfully!');
    } catch (error) {
      if (error.response) {
        console.error('Error submitting organization registration:', error.response.data);
        alert(`Error: ${error.response.data.message}`);
      } else if (error.request) {
        console.error('No response received:', error.request);
        alert('Error: No response received from the server.');
      } else {
        console.error('Error:', error.message);
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream p-10">
      <div className="mt-20 min-w-50 bg-sun shadow-md rounded-lg p-8">
        <h2 className="text-7xl font-medium mb-6 font-header text-center text-blue">
          Create an Organization Account
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              htmlFor="organizationName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Organization Name
            </label>
            <input
              type="text"
              id="organizationName"
              name="organizationName"
              placeholder="e.g. Your Company Name"
              value={formData.organizationName}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="yourcompany@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="contactPersonName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Contact Person Name
            </label>
            <input
              type="text"
              id="contactPersonName"
              name="contactPersonName"
              placeholder="e.g. John"
              value={formData.contactPersonName}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="contactPersonTitle"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Contact Person Title
            </label>
            <input
              type="text"
              id="contactPersonTitle"
              name="contactPersonTitle"
              placeholder="e.g. Doe"
              value={formData.contactPersonTitle}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-blue py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Organization;
