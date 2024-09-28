import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();

  // Function to open the modal
  const handleSignOutClick = () => {
    setIsModalOpen(true);
  };

  // Function to confirm sign out and redirect to the landing page
  const confirmSignOut = () => {
    setIsModalOpen(false);
    // Perform any necessary sign-out operations here (e.g., clearing tokens, etc.)
    history.push('/landingpg'); // Redirect to the landing page after sign out
  };

  // Function to cancel the sign out
  const cancelSignOut = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-10 bg-white shadow-lg rounded-lg text-center">
        <h1 className="text-3xl font-bold mb-6">Sign Out</h1>
        <button
          className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition duration-200"
          onClick={handleSignOutClick}
        >
          Sign Out
        </button>

        {/* Modal Dialog */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-xl font-bold mb-4">Are you sure you want to sign out?</h2>
              <div className="flex justify-center space-x-4">
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                  onClick={confirmSignOut}
                >
                  Confirm
                </button>
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition duration-200"
                  onClick={cancelSignOut}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signout;
