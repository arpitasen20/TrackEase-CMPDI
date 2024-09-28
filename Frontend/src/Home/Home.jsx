import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { FaTasks, FaFileAlt, FaClipboardCheck, FaProjectDiagram, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdDocument } from 'react-icons/io';
import { FcExpired,FcBarChart, FcComboChart,FcTimeline,FcFolder } from "react-icons/fc";



const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex  relative p-10 bg-gray-100">
      {/* Sidebar */}
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        {/* Top Bar */}
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* Main Content */}
        <div className="flex-1 p-8 mt-10">
          {/* Project Status */}
          <h2 className="text-xl font-bold">PROJECT STATUS</h2>
          <div className="grid grid-cols-4 gap-12 mt-3">
            
            <div className="p-4 bg-yellow-300 rounded hover:scale-105">
              <div className="flex items-center justify-between">
                <h2 className='font-bold'>Total Projects</h2>
                <FcTimeline className="text-6xl" />
              </div>
              <p>5</p>
              <div className="mt-4 bg-gray-100 rounded-full h-1">
                <div className="w-2/5 bg-lime-500 h-full rounded-full"></div>
              </div>
              <p>2 Active</p>
            </div>
            <div className="p-4 bg-yellow-300 rounded hover:scale-105">
              <div className="flex items-center justify-between">
                <h2 className='font-bold'>Project Progress</h2>
                <FcComboChart className="text-6xl text-green-500" />
              </div>
              <p>75%</p>
              <div className="mt-4 bg-gray-100 rounded-full h-1">
                <div className="w-3/4 bg-lime-500 h-full rounded-full"></div>
              </div>
              <p>On-time Completion</p>
            </div>
            <div className="p-4 bg-yellow-300 rounded hover:scale-105">
              <div className="flex items-center justify-between">
                <h2 className='font-bold'>Tasks</h2>
                <FaTasks className="text-6xl text-green-500" />
              </div>
              <p>23 Pending</p>
              <div className="mt-4 bg-gray-100 rounded-full h-1">
                <div className="w-1/3 bg-lime-500 h-full rounded-full"></div>
              </div>
              <p>8 Completed</p>
            </div>
            <div className="p-4 bg-yellow-300 rounded hover:scale-105">
              <div className="flex items-center justify-between">
                <h2 className='font-bold'>Documents</h2>
                <FcFolder className="text-6xl text-green-500" />
              </div>
              <p>56 Files</p>
              <div className="mt-4 bg-gray-100 rounded-full h-1">
                <div className="w-1/2 bg-lime-500 h-full rounded-full"></div>
              </div>
              <p>2GB Used</p>
            </div>
          </div>

          {/* Project Categories */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div className="p-4 bg-green-600 text-white rounded flex items-center justify-between hover:scale-105">
              <h3 className='font-bold'>Active Projects</h3>
              <FcBarChart className="text-6xl" />
            </div>
            <div className="p-4 bg-orange-500 text-white rounded flex items-center justify-between hover:scale-105">
              <h3 className='font-bold'>Pending Projects</h3>
              <FcExpired className="text-6xl" />
            </div>
            <div className="p-4 bg-blue-500 text-white rounded flex items-center justify-between hover:scale-105">
              <h3 className='font-bold'>Completed Projects</h3>
              <FaCheckCircle className="text-6xl" />
            </div>
            <div className="p-4 bg-red-500 text-white rounded flex items-center justify-between hover:scale-105">
              <h3 className='font-bold'>Delayed Projects</h3>
              <FaTimesCircle className="text-6xl" />
            </div>
          </div>

          {/* Recent Activities */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Recent Activities</h2>
              <div className="flex items-center text-blue-500 cursor-pointer">
                <span>See all</span>
                <AiOutlineRight className="ml-1" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="p-4 bg-white shadow rounded">
                <p className='font-bold'>Budget Revision for Solar Energy</p>
                <p className="text-sm text-gray-500 mt-2">Generated By Dr. R. Mehta</p>
                <p className="text-sm text-gray-500">Generated On 15 Sep 2024</p>
                <button className="mt-4 hover:scale-105 bg-gradient-to-b from-[#0C0032] via-[#190061] to-[#3500D3] text-white px-10 py-2 rounded">View</button>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <p className='font-bold'>Budget Revision for Solar Energy</p>
                <p className="text-sm text-gray-500 mt-2">Generated By Dr. R. Mehta</p>
                <p className="text-sm text-gray-500">Generated On 15 Sep 2024</p>
                <button className="mt-4 hover:scale-105 bg-gradient-to-b from-[#0C0032] via-[#190061] to-[#3500D3] text-white px-10 py-2 rounded">View</button>
              </div>
              <div className="p-4 bg-white shadow rounded">
                <p className='font-bold'>Time extension request for Coal Monitoring</p>
                <p className="text-sm text-gray-500 mt-2">Generated By Dr. T. Singh</p>
                <p className="text-sm text-gray-500">Generated On 4 Sep 2024</p>
                <button className="mt-4 hover:scale-105 bg-gradient-to-b from-[#0C0032] via-[#190061] to-[#3500D3] text-white px-10 py-2 rounded">View</button>
              </div>
            </div>
          </div>

          <div className='mt-8 p-10 rounded bg-gradient-to-b from-[#0C0032] via-[#190061] to-[#3500D3] flex items-center justify-between'>
            <div className='grid-cols-2 items-center'>
              <h2 className="text-lg font-bold text-white">RECENT SUBMISSIONS</h2>
              <button className="mt-4 hover:scale-105 bg-white text-black px-10 py-2 rounded">View</button>
            </div>
            <div className='grid-cols-2'>
              <h2 className="text-lg font-bold text-white">PENDING APPROVALS</h2>
              <button className="mt-4 hover:scale-105 bg-white text-black px-10 py-2 rounded">View</button>
            </div>
            <div className='grid-cols-2'>
              <h2 className="text-lg font-bold text-white">UPCOMING DEADLINES</h2>
              <button className="mt-4 hover:scale-105 bg-white text-black px-10 py-2 rounded">View</button>
            </div>
            <div className='grid-cols-2'>
              <h2 className="text-lg font-bold text-white">ISSUES RAISED</h2>
              <button className="mt-4 hover:scale-105 bg-white text-black px-10 py-2 rounded">View</button>
            </div>

          </div>

          {/* Featured Projects */}
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Featured Projects</h2>
              <div className="flex items-center text-blue-500 cursor-pointer">
                <span>See all</span>
                <AiOutlineRight className="ml-1" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
  <div className="p-4 bg-white shadow rounded hover:scale-105">
    <img 
      src="https://d19qcjcztr69p4.cloudfront.net/media/articles/pop/279754.jpg"  
      alt="Underground Safety Monitoring System" 
      className="w-full h-44 object-cover rounded" 
    />
    <p className="mt-4 font-bold">Underground Safety Monitoring System</p>
  </div>
  <div className="p-4 bg-white shadow rounded hover:scale-105">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjjaHxWkRXu3WQIsa0aAwEmz_NLS9FESJ6YxWnn14iY-aDM4rMIy37WmrCa2W0L2idrt4&usqp=CAU"  
      alt=" Project Management in the Mining" 
      className="w-full h-44 object-cover rounded" 
    />
    <p className="mt-4 font-bold"> Project Management in the Mining</p>
  </div>
  <div className="p-4 bg-white shadow rounded hover:scale-105">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYUbwEmW4BVpOk2OK0vY3H0_rqTV-YltGr2Q&s" 
      alt="Smart Sensor Networks for Mine Monitoring" 
      className="w-full h-44 object-cover rounded" 
    />
    <p className="mt-4 font-bold">Smart Sensor Networks for Mine Monitoring</p>
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
