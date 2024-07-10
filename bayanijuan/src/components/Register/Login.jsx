import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5010/Login', {
        email,
        password
      });
      console.log("Login response:", response.data);
      if (response.data.success) {
        // If login is successful, navigate to the home page
        navigate('/Home');
      } else {
        setMessage(response.data.message || 'Login failed');
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage('Error logging in');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cream">
      <div className="w-full max-w-md bg-sun shadow-md rounded-lg p-8">
        <h2 className="text-7xl font-medium mb-6 font-header text-center text-blue">Login</h2>
        {message && <p className="text-center text-red-500">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-body font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-body font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p>Don't have an account? <Link to="/register" className="text-blue font-bold">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
