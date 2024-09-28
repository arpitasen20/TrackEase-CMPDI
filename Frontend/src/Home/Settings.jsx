import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Settings = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState({
    projectUpdates: false,
    budgetAlerts: false,
    meetingReminders: false,
  });
  const [pushNotifications, setPushNotifications] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEmailNotificationsChange = (type) => {
    setEmailNotifications({ ...emailNotifications, [type]: !emailNotifications[type] });
  };

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Settings</h1>
          <p className="text-lg text-center mb-8">Manage your account and preferences</p>

          {/* Account Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
            <div className="border-t border-b">
              <div className="py-4">
                <label className="block font-semibold">Name:</label>
                <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
              </div>
              <div className="py-4">
                <label className="block font-semibold">Email:</label>
                <input type="email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
              </div>
              <div className="py-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>

          {/* Change Password */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <div className="border-t border-b">
              <div className="py-4">
                <label className="block font-semibold">Current Password:</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter current password" />
              </div>
              <div className="py-4">
                <label className="block font-semibold">New Password:</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter new password" />
              </div>
              <div className="py-4">
                <label className="block font-semibold">Confirm New Password:</label>
                <input type="password" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Confirm new password" />
              </div>
              <div className="py-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">
                  Change Password
                </button>
              </div>
            </div>
          </div>

          {/* Notification Preferences */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Notification Preferences</h2>
            <div className="border-t border-b py-4">
              <div className="mb-4">
                <h3 className="font-semibold">Email Notifications</h3>
                <div className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={emailNotifications.projectUpdates}
                      onChange={() => handleEmailNotificationsChange('projectUpdates')}
                    />
                    <span className="ml-2">Project Updates</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={emailNotifications.budgetAlerts}
                      onChange={() => handleEmailNotificationsChange('budgetAlerts')}
                    />
                    <span className="ml-2">Budget Alerts</span>
                  </label>
                </div>
                <div className="mt-2">
                  <label>
                    <input
                      type="checkbox"
                      checked={emailNotifications.meetingReminders}
                      onChange={() => handleEmailNotificationsChange('meetingReminders')}
                    />
                    <span className="ml-2">Meeting Reminders</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold">Push Notifications</h3>
                <label className="mt-2">
                  <span className="mr-4">Enable/Disable</span>
                  <input
                    type="checkbox"
                    checked={pushNotifications}
                    onChange={() => setPushNotifications(!pushNotifications)}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* Language and Region Settings */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Language and Region Settings</h2>
            <div className="border-t border-b py-4">
              <div className="mb-4">
                <label className="block font-semibold">Language Selection</label>
                <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Language</option>
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold">Region Settings</label>
                <select className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Region</option>
                  <option>Americas</option>
                  <option>EMEA</option>
                  <option>APAC</option>
                </select>
              </div>
            </div>
          </div>

          {/* Data Management */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Data Management</h2>
            <div className="border-t border-b py-4">
              <div className="flex justify-between items-center mb-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">Export Data</button>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">Import Data</button>
              </div>
              <p className="text-red-600 text-sm">
                Warning: Deleting your account will remove all data.
              </p>
              <button className="bg-red-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-red-700">
                Delete Account
              </button>
            </div>
          </div>

          {/* Help & Support Links */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Help & Support Links</h2>
            <div className="border-t border-b py-4">
              <button className="bg-purple-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-purple-700 mr-4">
                Visit Help Center
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-green-700">
                Contact Support
              </button>
            </div>
          </div>

          {/* Feedback */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Feedback</h2>
            <div className="border-t border-b py-4">
              <label className="block font-semibold">Your Feedback:</label>
              <textarea className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"></textarea>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700">
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
