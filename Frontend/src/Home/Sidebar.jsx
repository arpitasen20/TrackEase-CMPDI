import React from 'react';
import { FaHome, FaFileAlt, FaChartPie, FaProjectDiagram, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-blue-100 p-4 shadow-lg">
      <div className="text-center py-4">
        <img src="/logo.png" alt="Logo" className="mx-auto mb-4 w-12" />
        <h1 className="text-xl font-bold">TrackEase CMPDI</h1>
      </div>

      <nav className="mt-8">
        <ul>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaHome size={20} />
              <span>Home</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaProjectDiagram size={20} />
              <span>Project Management</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaChartPie size={20} />
              <span>Financials</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaFileAlt size={20} />
              <span>Documents</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaChartPie size={20} />
              <span>Progress Reports</span>
            </a>
          </li>
          <li className="mb-4">
            <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
              <FaQuestionCircle size={20} />
              <span>Help & Support</span>
            </a>
          </li>
        </ul>  
      </nav>

      <div className="mt-auto">
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-blue-500">
          <FaCog size={20} />
          <span>Settings</span>
        </a>
        <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-red-500 mt-4">
          <FaSignOutAlt size={20} />
          <span>Log out</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
