import React from 'react';
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { IoArrowBackSharp } from "react-icons/io5";

const Dashboard = () => {
  const navigate = useNavigate();

  // Data for charts
  const projectStatusData = [
    { name: 'Active Projects', value: 20, color: '#00C49F' },
    { name: 'Pending Projects', value: 26, color: '#FFBB28' },
    { name: 'Completed Projects', value: 54, color: '#0088FE' },
    { name: 'Total Pending', value: 26, color: '#FF8042' },
  ];

  const approvalData = [
    { name: 'Approved', value: 63, color: '#00C49F' },
    { name: 'Pending', value: 37, color: '#FF8042' },
  ];

  return (
    <div className="p-8 bg-gray-100">
      {/* Back button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 flex items-center text-blue-600 hover:text-blue-800"
      >
        <IoArrowBackSharp className="mr-2 text-2xl" />
        
      </button>

      {/* Grid for charts and data */}
      <div className="grid pt-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Budget Overview */}
        <div className="bg-white shadow-lg p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Budget Overview</h3>
            <span>Today</span>
          </div>
          <p className="text-2xl font-bold mt-4">₹ 175 Crores</p>
          <p>Total Spent: ₹ 112.50 Crores</p>
          <p className="text-red-500">Total Remaining: ₹ 62.50 Crores</p>
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
        </div>
      </div>

      {/* Search Project */}
      <div className="bg-white shadow-lg p-6 rounded-lg mt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <input type="text" placeholder="Project ID" className="border px-4 py-2 rounded-md focus:outline-none" />
          <select className="border px-4 py-2 rounded-md focus:outline-none">
            <option>Project Status</option>
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
    </div>
  );
};

export default Dashboard;
