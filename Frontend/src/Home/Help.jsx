import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { FaDownload, FaVideo, FaComments, FaStar } from 'react-icons/fa';

const Help = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [faq1, setFaq1] = useState(false);
  const [faq2, setFaq2] = useState(false);
  const [faq3, setFaq3] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Help & Support</h1>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search for help topics..."
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* FAQ Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">FAQ</h2>
            <div className="border-t border-b">
              <div className="py-4">
                <button className="w-full text-left text-lg font-semibold" onClick={() => setFaq1(!faq1)}>
                  How do I submit a progress report? {faq1 ? '-' : '+'}
                </button>
                {faq1 && <p className="pl-4 pt-2 text-gray-700">You can submit a progress report via the "Submit Progress Report" button in the Reports section.</p>}
              </div>
              <div className="py-4">
                <button className="w-full text-left text-lg font-semibold" onClick={() => setFaq2(!faq2)}>
                  What should I do if I encounter an issue? {faq2 ? '-' : '+'}
                </button>
                {faq2 && <p className="pl-4 pt-2 text-gray-700">If you encounter an issue, contact support via the form below or use the live chat for immediate assistance.</p>}
              </div>
              <div className="py-4">
                <button className="w-full text-left text-lg font-semibold" onClick={() => setFaq3(!faq3)}>
                  How can I access my project documents? {faq3 ? '-' : '+'}
                </button>
                {faq3 && <p className="pl-4 pt-2 text-gray-700">You can access project documents from the "Project Documents" tab in your dashboard.</p>}
              </div>
            </div>
          </div>

          {/* User Guides and Tutorials */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">User Guides and Tutorials</h2>
            <div className="border-t border-b">
              <div className="py-4 flex justify-between items-center">
                <span>Getting Started with the App</span>
                <button className="text-blue-600 hover:underline"><FaDownload className="inline mr-1" /> Download</button>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Submitting Reports</span>
                <button className="text-blue-600 hover:underline"><FaDownload className="inline mr-1" /> Download</button>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Key Functionalities</span>
                <button className="text-blue-600 hover:underline"><FaVideo className="inline mr-1" /> Watch Video</button>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
            <div className="border-t border-b py-4">
              <form className="space-y-4">
                <div>
                  <label className="block font-semibold">Name</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block font-semibold">Email</label>
                  <input type="email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block font-semibold">Subject</label>
                  <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block font-semibold">Description</label>
                  <textarea className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">
                  Submit a Support Request
                </button>
              </form>
            </div>
          </div>

          {/* Live Chat */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Live Chat</h2>
            <div className="border-t border-b py-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-green-700">
                <FaComments className="inline mr-1" /> Start Live Chat
              </button>
            </div>
          </div>

          {/* Community Forum */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Community Forum</h2>
            <div className="border-t border-b py-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-purple-700">
                Visit Community Forum
              </button>
            </div>
          </div>

          {/* Downloadable Resources */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Downloadable Resources</h2>
            <div className="border-t border-b">
              <div className="py-4 flex justify-between items-center">
                <span>Download Template</span>
                <button className="text-blue-600 hover:underline"><FaDownload className="inline mr-1" /> Download</button>
              </div>
              <div className="py-4 flex justify-between items-center">
                <span>Download Regulatory Guidelines</span>
                <button className="text-blue-600 hover:underline"><FaDownload className="inline mr-1" /> Download</button>
              </div>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Feedback</h2>
            <div className="border-t border-b py-4">
              <div className="flex items-center mb-4">
                <span className="mr-2">Rate your experience:</span>
                {[1, 2, 3, 4, 5].map(star => (
                  <FaStar key={star} className="text-yellow-500 mr-1 cursor-pointer" />
                ))}
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">
                Provide Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
