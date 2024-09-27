import React from 'react';
import Navbar from './Navbar'; // Importing the Navbar component
import landingImage from '../assets/landing.png'; // Adjust the path if needed

const Landing = () => {

  

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-[#0C0032] via-[#190061] to-[#3500D3] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Section */}
      <main className="flex flex-col justify-items-center items-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-4">
          Efficient Project Management <br /> from Start to Success
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Track progress, collaborate seamlessly, and ensure timely project completion with CMPDI's advanced monitoring system
        </p>
        

        {/* Landing Image */}
        <img src={landingImage} alt="Landing" className="w-full max-w-4xl rounded-lg shadow-lg" />
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4">
        <p className="text-sm">&copy; 2024 TrackEase CMPDI. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Landing;
