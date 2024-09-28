import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { FaSearch, FaHistory, FaUpload } from 'react-icons/fa';
import { MdMoreVert } from 'react-icons/md';

const Documents = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Document Management</h1>

          {/* Actions Bar */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700 mr-2">
                <FaUpload className="inline mr-1" /> Upload New Document
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-green-700">
                Generate Report
              </button>
              <div className="relative ml-4">
                <input type="text" placeholder="Search..." className="border rounded-lg p-2" />
                <FaSearch className="absolute right-2 top-2 text-gray-500" />
              </div>
              <button className="ml-4 text-gray-500 hover:scale-105">
                <FaHistory />
              </button>
              <button className="ml-2 text-gray-500 hover:scale-105">
                <MdMoreVert />
              </button>
            </div>
            <div>
              <select className="border rounded-lg p-2 mr-2">
                <option>Project Name</option>
                <option>Date</option>
                <option>Author</option>
              </select>
              <select className="border rounded-lg p-2">
                <option>Document Categories</option>
                <option>Research Proposals</option>
                <option>Progress Reports</option>
                <option>Financial Documents</option>
                <option>Safety Compliance Documents</option>
                <option>Meeting Minutes</option>
              </select>
            </div>
          </div>

          {/* Quick Access Table */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Recently Uploaded Documents</h2>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Document Name</th>
                  <th className="px-4 py-2">Uploaded By</th>
                  <th className="px-4 py-2">Upload Date</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Rows */}
                <tr>
                  <td className="border px-4 py-2">Research Proposal 1</td>
                  <td className="border px-4 py-2">User A</td>
                  <td className="border px-4 py-2">2024-09-01</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-600">View More</button>
                  </td>
                </tr>
                <tr>
                  <td className="border px-4 py-2">Progress Report Q1</td>
                  <td className="border px-4 py-2">User B</td>
                  <td className="border px-4 py-2">2024-09-15</td>
                  <td className="border px-4 py-2">
                    <button className="text-blue-600">View More</button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Notifications Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4">Notifications</h2>
            <p>No pending approvals or updates.</p>
          </div>

          {/* Alert Box Section */}
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
            <p className="font-bold">Alert:</p>
            <p>Some documents require immediate review.</p>
          </div>

          {/* Document Categories Section */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-lime-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <i className="fas fa-file-alt text-3xl mr-4"></i>
              <span className="text-xl font-semibold">Research Proposals</span>
            </div>
            <div className="bg-yellow-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <i className="fas fa-file-alt text-3xl mr-4"></i>
              <span className="text-xl font-semibold">Progress Reports</span>
            </div>
            <div className="bg-orange-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <i className="fas fa-file-alt text-3xl mr-4"></i>
              <span className="text-xl font-semibold">Financial Documents</span>
            </div>
            <div className="bg-blue-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <i className="fas fa-file-alt text-3xl mr-4"></i>
              <span className="text-xl font-semibold">Safety Compliance Documents</span>
            </div>
            <div className="bg-purple-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <i className="fas fa-file-alt text-3xl mr-4"></i>
              <span className="text-xl font-semibold">Meeting Minutes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
