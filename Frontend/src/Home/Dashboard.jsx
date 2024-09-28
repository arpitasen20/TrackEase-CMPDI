import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { IoArrowBackSharp } from "react-icons/io5";
import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const navigate = useNavigate();

  const [selectedData, setSelectedData] = useState('Dataset 1'); 

  // Sample data sets
  const dataSets = {
    'Dataset 1': {
      completionAndLoss: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Completion (%)',
            data: [65, 59, 80, 81],
            borderColor: '#00C49F',
            backgroundColor: 'rgba(0, 196, 159, 0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Loss (%)',
            data: [28, 48, 40, 19],
            borderColor: '#FF8042',
            backgroundColor: 'rgba(255, 128, 66, 0.2)',
            fill: true,
            tension: 0.1,
          }
        ]
      },
      projectPhases: {
        labels: ['Planning', 'Execution', 'Monitoring', 'Completion'],
        datasets: [
          {
            label: 'Progress Percentage (%)',
            data: [30, 60, 80, 90],
            backgroundColor: ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'],
          },
        ],
      },
      approvalData: [
        { name: 'Approved', value: 63, color: '#00C49F' },
        { name: 'Pending', value: 37, color: '#FF8042' },
      ],
      projectStatusData: [
        { name: 'Active Projects', value: 20, color: '#00C49F' },
        { name: 'Pending Projects', value: 26, color: '#FFBB28' },
        { name: 'Completed Projects', value: 54, color: '#0088FE' },
        { name: 'Total Pending', value: 26, color: '#FF8042' },
      ],
    },
    'Dataset 2': {
      // Another dataset can be defined here
      completionAndLoss: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [
          {
            label: 'Completion (%)',
            data: [70, 65, 90, 85],
            borderColor: '#00C49F',
            backgroundColor: 'rgba(0, 196, 159, 0.2)',
            fill: true,
            tension: 0.1,
          },
          {
            label: 'Loss (%)',
            data: [20, 30, 25, 15],
            borderColor: '#FF8042',
            backgroundColor: 'rgba(255, 128, 66, 0.2)',
            fill: true,
            tension: 0.1,
          }
        ]
      },
      projectPhases: {
        labels: ['Planning', 'Execution', 'Monitoring', 'Completion'],
        datasets: [
          {
            label: 'Progress Percentage (%)',
            data: [40, 50, 70, 80],
            backgroundColor: ['#00C49F', '#0088FE', '#FFBB28', '#FF8042'],
          },
        ],
      },
      approvalData: [
        { name: 'Approved', value: 50, color: '#00C49F' },
        { name: 'Pending', value: 50, color: '#FF8042' },
      ],
      projectStatusData: [
        { name: 'Active Projects', value: 30, color: '#00C49F' },
        { name: 'Pending Projects', value: 20, color: '#FFBB28' },
        { name: 'Completed Projects', value: 40, color: '#0088FE' },
        { name: 'Total Pending', value: 10, color: '#FF8042' },
      ],
    },
  };

  // Current data based on selected dataset
  const { completionAndLoss, projectPhases, approvalData, projectStatusData } = dataSets[selectedData];

  const handleDataChange = (event) => {
    setSelectedData(event.target.value);
  };

  const downloadReport = (chartType) => {
    alert(`Downloading ${chartType} report...`);
  };

  return (
    <div className="p-8 bg-gray-100">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <IoArrowBackSharp className="mr-2 text-2xl" />
        
      </button>
       {/* Budget Overview */}
       <div className="bg-white shadow-lg p-6 mb-11 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Budget Overview</h3>
            <span>Today</span>
          </div>
          <p className="text-2xl font-bold mt-4">₹ 175 Crores</p>
          <p>Total Spent: ₹ 112.50 Crores</p>
          <p className="text-red-500">Total Remaining: ₹ 62.50 Crores</p>
        </div>

      {/* Filter Dropdown and Download Report Button */}
      <div className="flex justify-between items-center mb-6">
        <select onChange={handleDataChange} value={selectedData} className="border px-4 py-2 rounded-md">
          <option value="Dataset 1">Dataset 1</option>
          <option value="Dataset 2">Dataset 2</option>
        </select>
        <button 
          onClick={() => downloadReport('Overall')} 
          className="bg-blue-600 text-white px-4 py-2 rounded-md ml-4"
        >
          Download Report
        </button>
      </div>

      {/* Grid for charts and data */}
      <div className="grid pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Completion and Loss Line Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-bold mb-4 text-lg">Project Completion and Loss Over Time</h3>
          <Line 
            data={completionAndLoss} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                tooltip: {
                  mode: 'index',
                  intersect: false,
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Time (Weeks)',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Percentage (%)',
                  },
                  beginAtZero: true,
                }
              }
            }} 
          />
          <button onClick={() => downloadReport('Completion and Loss')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Download Report</button>
        </div>

        {/* Project Progress Bar Chart */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <h3 className="font-bold mb-4 text-lg">Progress Across Different Project Phases</h3>
          <Bar 
            data={projectPhases} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Project Phases',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'Progress Percentage (%)',
                  },
                  beginAtZero: true,
                }
              }
            }} 
          />
          <button onClick={() => downloadReport('Project Progress')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Download Report</button>
        </div>
        
        {/* Project Approvals */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Project Approvals</h3>
            <span>Today</span>
          </div>
          <PieChart width={200} height={200}>
            <Pie data={approvalData} dataKey="value" outerRadius={80}>
              {approvalData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ul className="mt-4">
            <li className="flex justify-between"><span className="text-green-500">Approved</span><span>63%</span></li>
            <li className="flex justify-between"><span className="text-red-500">Pending</span><span>37%</span></li>
          </ul>
          <button onClick={() => downloadReport('Project Approvals')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Download Report</button>
        </div>

        {/* Project Status */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Project Status</h3>
            <span>Today</span>
          </div>
          <PieChart width={200} height={200}>
            <Pie data={projectStatusData} dataKey="value" outerRadius={80}>
              {projectStatusData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ul className="mt-4">
            {projectStatusData.map((status, index) => (
              <li key={index} className="flex justify-between">
                <span style={{ color: status.color }}>{status.name}</span>
                <span>{status.value}%</span>
              </li>
            ))}
          </ul>
          <button onClick={() => downloadReport('Project Status')} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md">Download Report</button>
        </div>
      </div>

      {/* Search Project */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Project ID" className="border px-4 py-2 rounded-md focus:outline-none" />
          <select className="border px-4 py-2 rounded-md focus:outline-none">
            <option>Project Status</option>
            <option>Pending</option>
            <option>Completed</option>
            <option>Delay</option>
          </select>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md">Check</button>
      </div>

      {/* Live Project Status */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-8">
        <h3 className="font-bold mb-4">Live Project Status</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="text-left">
              <tr>
                <th>No.</th>
                <th>Project ID</th>
                <th>Project Investigator</th>
                <th>Status</th>
                <th>Budget</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td>01</td>
                <td>6465</td>
                <td>Dr. N. Verma</td>
                <td className="text-blue-600">Completed</td>
                <td>₹ 3 Crore</td>
                <td><button className="bg-blue-600 text-white px-4 py-1 rounded-md">Details</button></td>
              </tr>
              <tr className="border-t">
                <td>02</td>
                <td>5665</td>
                <td>Dr. T. Singh</td>
                <td className="text-orange-500">Pending</td>
                <td>₹ 2 Crore</td>
                <td><button className="bg-blue-600 text-white px-4 py-1 rounded-md">Details</button></td>
              </tr>
              <tr className="border-t">
                <td>03</td>
                <td>1755</td>
                <td>Dr. R. Mehta</td>
                <td className="text-red-500">Delayed</td>
                <td>₹ 1 Crore</td>
                <td><button className="bg-blue-600 text-white px-4 py-1 rounded-md">Details</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Financial Overview Table */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-8">
        <h3 className="font-bold mb-4">Financial Overview</h3>
        <table className="w-full table-auto">
          <thead className="text-left">
            <tr>
              <th>Project Name</th>
              <th>Budget Allocated</th>
              <th>Amount Spent</th>
              <th>Remaining Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td>Coal Research Project</td>
              <td>$100,000</td>
              <td>$70,000</td>
              <td>$30,000</td>
            </tr>
            <tr className="border-t">
              <td>Safety Improvement</td>
              <td>$50,000</td>
              <td>$20,000</td>
              <td>$30,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
