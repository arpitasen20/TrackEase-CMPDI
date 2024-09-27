import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importing the useNavigate hook
import logo from '../assets/logo.png'; // Adjust the path if necessary

const Navbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleGetStarted = () => {
    navigate('/home'); // Navigate to the Home page when clicked
  };

  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-white shadow-md sticky top-0 z-10">
      {/* Logo on the left */}
      <img src={logo} alt="Logo" className="h-12" />

      {/* Centered Navigation Links */}
      <nav className="flex-grow flex justify-center space-x-8">
        <a href="#" className="">About</a>
        <a href="#" className="">Services</a>
        <a href="#" className="">Contacts</a>
      </nav>

      {/* Get Started Button on the right */}
      <button 
        className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
        onClick={handleGetStarted} // Trigger navigation on click
      >
        Get Started
      </button>
    </header>
  );
};

export default Navbar;
