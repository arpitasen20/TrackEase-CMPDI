import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from React Router

const Topbar = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleDashboardClick = () => {
    navigate('/dashboard'); // Navigate to the Dashboard component when clicked
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 bg-indigo-900 text-white">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 w-64 rounded-lg focus:outline-none text-black"
        />
        <FaSearch size={20} />
      </div>

      <div className="flex items-center space-x-6">
        <FaBell size={20} />
        <div 
          className="flex items-center space-x-2 cursor-pointer" // Make it clickable
          onClick={handleDashboardClick} // Trigger navigation on click
        >
          <FaUserCircle size={30} />
          <span className="text-white">Dashboard</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
