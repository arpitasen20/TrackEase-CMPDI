import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Line, Bar } from 'react-chartjs-2';
import { FaFileUpload, FaFileDownload, FaRegFileAlt, FaRegFileCode, FaRegFileWord, FaRegFileExcel, FaRegFilePdf } from 'react-icons/fa';

const Reports = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [filter, setFilter] = useState('monthly'); // State to handle the filter

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data for charts based on selected filter
  const getLineChartData = (filter) => {
    switch (filter) {
      case 'weekly':
        return {
          labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
          datasets: [
            { label: 'Completion', data: [20, 30, 50, 70], borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true, tension: 0.1 },
            { label: 'Loss', data: [10, 20, 30, 40], borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)', fill: true, tension: 0.1 },
            { label: 'Overtime', data: [5, 15, 10, 20], borderColor: 'rgba(255, 206, 86, 1)', backgroundColor: 'rgba(255, 206, 86, 0.2)', fill: true, tension: 0.1 },
          ],
        };
      case 'yearly':
        return {
          labels: ['2021', '2022', '2023', '2024'],
          datasets: [
            { label: 'Completion', data: [300, 400, 500, 600], borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true, tension: 0.1 },
            { label: 'Loss', data: [150, 200, 250, 300], borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)', fill: true, tension: 0.1 },
            { label: 'Overtime', data: [80, 100, 150, 200], borderColor: 'rgba(255, 206, 86, 1)', backgroundColor: 'rgba(255, 206, 86, 0.2)', fill: true, tension: 0.1 },
          ],
        };
      default: // monthly data
        return {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            { label: 'Completion', data: [65, 59, 80, 81, 56, 55, 40], borderColor: 'rgba(75, 192, 192, 1)', backgroundColor: 'rgba(75, 192, 192, 0.2)', fill: true, tension: 0.1 },
            { label: 'Loss', data: [28, 48, 40, 19, 86, 27, 90], borderColor: 'rgba(255, 99, 132, 1)', backgroundColor: 'rgba(255, 99, 132, 0.2)', fill: true, tension: 0.1 },
            { label: 'Overtime', data: [12, 25, 18, 30, 42, 15, 35], borderColor: 'rgba(255, 206, 86, 1)', backgroundColor: 'rgba(255, 206, 86, 0.2)', fill: true, tension: 0.1 },
          ],
        };
    }
  };

  const barChartData = {
    labels: ['Planning', 'Execution', 'Monitoring', 'Completion'],
    datasets: [
      {
        label: 'Progress Percentage',
        data: filter === 'weekly' ? [20, 40, 60, 80] : filter === 'yearly' ? [50, 70, 85, 95] : [30, 60, 80, 90], // Different data for each filter
        backgroundColor: ['rgba(54, 162, 235, 0.5)', 'rgba(255, 206, 86, 0.5)', 'rgba(75, 192, 192, 0.5)', 'rgba(153, 102, 255, 0.5)'],
      },
    ],
  };

  const burnDownChartData = {
    labels: filter === 'weekly' ? ['Day 1', 'Day 2', 'Day 3', 'Day 4'] : filter === 'yearly' ? ['Q1', 'Q2', 'Q3', 'Q4'] : ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Remaining Work',
        data: filter === 'weekly' ? [30, 20, 10, 0] : filter === 'yearly' ? [300, 200, 100, 0] : [100, 80, 60, 20],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        fill: false,
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Progress Reports</h1>
            <div>
              {/* Filter Dropdown */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
          </div>

          {/* Actions Bar */}
          <div className="flex justify-between mb-4">
            <div className="flex items-center">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700 mr-2">
                <FaFileUpload className="inline mr-1" /> Submit Progress Report
              </button>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-green-700">
                <FaFileDownload className="inline mr-1" /> Generate Summary Report
              </button>
            </div>
          </div>

          {/* Graphs Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Project Progress</h2>
              <Line data={getLineChartData(filter)} options={{ responsive: true }} />
              <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:scale-105">
                <FaFileDownload className="inline mr-1" /> Download Report
              </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Milestone Tracking</h2>
              <Bar data={barChartData} options={{ responsive: true }} />
              <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:scale-105">
                <FaFileDownload className="inline mr-1" /> Download Report
              </button>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Burn-down Chart</h2>
              <Line data={burnDownChartData} options={{ responsive: true }} />
              <button className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:scale-105">
                <FaFileDownload className="inline mr-1" /> Download Report
              </button>
            </div>
          </div>

           {/* Recent Reports Section */}
           <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-2xl font-bold">Recent Reports</h2>
              <button className="text-blue-600">View All</button>
            </div>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Task Name</th>
                  <th className="px-4 py-2">Start Date</th>
                  <th className="px-4 py-2">End Date</th>
                  <th className="px-4 py-2">Progress (%)</th>
                </tr>
              </thead>
              <tbody>
                {/* Sample Data Rows */}
                <tr className="hover:bg-gray-100">
                  <td className="border px-4 py-2">Research Task 1</td>
                  <td className="border px-4 py-2">2024-08-01</td>
                  <td className="border px-4 py-2">2024-09-01</td>
                  <td className="border px-4 py-2">75%</td>
                </tr>
                <tr className="hover:bg-gray-100">
                  <td className="border px-4 py-2">Development Task A</td>
                  <td className="border px-4 py-2">2024-08-15</td>
                  <td className="border px-4 py-2">2024-09-15</td>
                  <td className="border px-4 py-2">60%</td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>

          {/* Report Categories Section */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-red-400 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFilePdf className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Exploration Reports</span>
            </div>
            <div className="bg-orange-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileAlt className="text-3xl mr-4" />
              <span className="text-xl font-semibold">EIA Reports</span>
            </div>
            <div className="bg-amber-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileWord className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Annual Reports</span>
            </div>
            <div className="bg-lime-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileAlt className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Quarterly Reports</span>
            </div>
            <div className="bg-green-600 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileExcel className="text-3xl mr-4" />
              <span className="text-xl font-semibold">R&D Reports</span>
            </div>
            <div className="bg-cyan-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileCode className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Technical Reports</span>
            </div>
            <div className="bg-yellow-500 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileAlt className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Progress Reports</span>
            </div>
            <div className="bg-violet-600 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFilePdf className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Compliance Reports</span>
            </div>
            <div className="bg-pink-600 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFileAlt className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Financial Reports</span>
            </div>
            <div className="bg-amber-700 shadow-lg rounded-lg p-6 flex items-center hover:scale-105">
              <FaRegFilePdf className="text-3xl mr-4" />
              <span className="text-xl font-semibold">Closure Reports</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
