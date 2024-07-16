import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); 

    try {
      const res = await axios.post('https://voyagai.onrender.com/api/auth/signup', { name, email, password });
      console.log(res.data.token);
      localStorage.setItem('token', res.data.token);
      window.location.href = '/login';
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (

      <div className="min-h-screen flex flex-col justify-center items-center mt-6">
    <div className="bg-[#606797] rounded text-center px-20 py-10 items-center bg-opacity-30 backdrop-blur-[15px]">
      <img
        alt="VoyagAI"
        src="/beigelogo.png"
        className="w-20 h-20 object-cover mx-auto"
      />
      <h1 className="text-4xl font-bold text-center mb-10 text-[#f9b17a]">VoyageAI</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">  
      <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                 <input
                   type="text"
                   id="name"
                   placeholder="Name"
                   value={name}
                   onChange={(e) => setName(e.target.value)}
                   className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                
                {error && 
                  <div className="bg-red-100 border-t border-b border-red-500 text-red-700 px-0 py-1.5" role="alert">
                    <p className="text-sm">{error}</p>
                  </div>
                }
              <button type="submit" className="px-4 py-2 text-white font-bold rounded shadow hover:scale-105 transition duration-300 ease-in-out hover:bg-[#2d3250] rounded-md bg-[#f9b17a]">
                Sign Up
              </button>
            </form>
            <p className="text-white text-center mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-[#f9b17a] hover:text-white">
                Login
              </Link>
            </p>
          </div>
    </div>
  );
};

export default Signup;
