import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Topbar = ({ isSidebarOpen, toggleSidebar }) => {
  const navigate = useNavigate(); 

  const handleDashboardClick = () => {
    navigate('/dashboard'); 
  };

  return (
    <div className="fixed top-0 left-0 right-0 flex shadow-md justify-between items-center px-6 py-4 bg-blue-950 text-white z-50">
      {/* Sidebar toggle and logo */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className={`text-2xl ${isSidebarOpen ? 'hidden' : 'block'}`}>
          <RxHamburgerMenu />
        </button>
        {isSidebarOpen && (
          <button onClick={toggleSidebar} className="text-2xl">
            <IoMdClose />
          </button>
        )}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-14 cursor-pointer hover:scale-105" />
        </Link>
      </div>

      {/* Search Box */}
      <div className="flex items-center space-x-6">
        <div className="relative">
          <FaSearch
            size={20}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white"
          />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 w-64 rounded-lg bg-transparent border border-white text-white placeholder-white focus:outline-none"
          />
        </div>

        {/* Icons and buttons */}
        <button
          onClick={handleDashboardClick}
          className="hover:scale-105 bg-blue-500 font-bold text-white px-10 py-2 rounded"
        >
          Dashboard
        </button>
        <FaBell size={20} className="hover:scale-125" />
        <FaUserCircle size={30} className="hover:scale-125" />
      </div>
    </div>
  );
};

export default Topbar;
