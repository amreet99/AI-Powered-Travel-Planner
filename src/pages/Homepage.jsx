import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Homepage = () => {
  
  return (
    <div className="relative px-6 pt-[250px] flex items-center justify-center min-h-screen">
      <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-[#767fb4] sm:text-8xl">Your <span className="text-[#f9b17a] ">SMART </span> Travel Planner</h1>
      <p className="mt-6 text-xl leading-8 text-white ">Explore the world with ease and embark on your next adventure.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <a id="go" href="/generator" className="rounded-md bg-[#f9b17a] px-3.5 py-2.5 text-lg font-bold text-[#2d3250] shadow-sm hover:scale-110 transition duration-100 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Start planning with AI
          </a>
      </div>
      <img
        alt="VoyagAI"
        src="/scene.png"
        className="object-cover mx-auto pt-15"
      />
      <h1 className="text-3xl font-bold tracking-tight text-[#767fb4] sm:text-6xl pb-20 pt-10">Your <span className="text-[#f9b17a] ">AI </span> Powered Trip</h1>
      
      </div>
    </div>
  );
};

export default Homepage;
