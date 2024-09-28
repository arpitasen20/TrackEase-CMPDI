import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png'; 

const Navbar = () => {
  const navigate = useNavigate(); 

  const handleGetStarted = () => {
    navigate('/home'); 
  };

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-blue-950 shadow-md sticky top-0 z-10">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-14 cursor-pointer hover:scale-105" />

      {/*  Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-12">
  <a href="#" className="px-4 py-2 rounded-lg hover:bg-blue-200 hover:text-black hover:shadow-lg transition-colors duration-200">
    About
  </a>
  <a href="#" className="px-4 py-2 rounded-lg hover:bg-blue-200 hover:text-black hover:shadow-lg transition-colors duration-200">
    Services
  </a>
  <a href="#" className="px-4 py-2 rounded-lg hover:bg-blue-200 hover:text-black hover:shadow-lg transition-colors duration-200">
    Contacts
  </a>
</nav>


      {/* Get Started Button  */}
      <button 
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded hover:scale-105"
        onClick={handleGetStarted}
      >
        Get Started
      </button>
    </header>
  );
};

export default Navbar;
