import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Bar, Pie } from 'react-chartjs-2';
import { FaPlus, FaFileInvoiceDollar } from 'react-icons/fa';

const Financials = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample data
  const budgetData = {
    labels: ['Equipment Purchase', 'Field Studies', 'Safety Measures', 'Personnel'],
    budgeted: [50000, 30000, 20000, 10000],
    actual: [45000, 35000, 25000, 12000],
  };

  const totalBudget = budgetData.budgeted.reduce((acc, val) => acc + val, 0);
  const currentExpenditure = budgetData.actual.reduce((acc, val) => acc + val, 0);
  const remainingBudget = totalBudget - currentExpenditure;

  // Bar chart data
  const barData = {
    labels: budgetData.labels,
    datasets: [
      {
        label: 'Budgeted Amount',
        data: budgetData.budgeted,
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      },
      {
        label: 'Actual Spending',
        data: budgetData.actual,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  // Pie chart data
  const pieData = {
    labels: budgetData.labels,
    datasets: [
      {
        data: budgetData.actual,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  // Detailed budget breakdown data
  const detailedBreakdown = [
    { category: 'Equipment Purchase', allocated: 50000, spent: 45000 },
    { category: 'Field Studies', allocated: 30000, spent: 35000 },
    { category: 'Safety Measures', allocated: 20000, spent: 25000 },
    { category: 'Personnel', allocated: 10000, spent: 12000 },
  ];

  // Budget alerts
  const budgetAlerts = [
    { message: 'Safety Measures spending exceeds budget!', priority: 'high' },
    { message: 'Field Studies nearing budget limit!', priority: 'medium' },
    { message: 'Personnel expenses are within limits.', priority: 'low' },
  ];

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Financial Overview</h1>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold">Total Project Budget</h2>
              <p className="text-2xl font-bold">{totalBudget} USD</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold">Current Expenditure</h2>
              <p className="text-2xl font-bold">{currentExpenditure} USD</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-xl font-semibold">Remaining Budget</h2>
              <p className="text-2xl font-bold">{remainingBudget} USD</p>
            </div>
          </div>

          {/* Budget Alerts */}
          <h2 className="text-2xl font-bold mb-4">Budget Alerts</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            {budgetAlerts.map((alert, index) => (
              <div key={index} className={`p-4 mb-2 rounded ${alert.priority === 'high' ? 'bg-red-500 text-white' : alert.priority === 'medium' ? 'bg-orange-500 text-white' : 'bg-yellow-500 text-black'}`}>
                {alert.message}
              </div>
            ))}
          </div>

          {/* Budget Breakdown */}
          <h2 className="text-2xl font-bold mb-4">Budget Breakdown</h2>
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Budget vs. Actuals</h3>
              <Bar data={barData} />
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Percentage Distribution</h3>
              <Pie data={pieData} />
            </div>
          </div>

          {/* Expense Tracking */}
          <h2 className="text-2xl font-bold mb-4">Expense Tracking</h2>
          <div className="flex space-x-4 mb-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
              <FaPlus className="mr-2" /> Add New Expense
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 flex items-center">
              <FaFileInvoiceDollar className="mr-2" /> Generate Financial Report
            </button>
          </div>
          
          {/* Detailed Budget Breakdown */}
          <h2 className="text-2xl font-bold mb-4">Detailed Budget Breakdown</h2>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="text-left py-2 px-4">Category</th>
                  <th className="text-left py-2 px-4">Allocated</th>
                  <th className="text-left py-2 px-4">Spent</th>
                </tr>
              </thead>
              <tbody>
                {detailedBreakdown.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{item.category}</td>
                    <td className="py-2 px-4">{item.allocated} USD</td>
                    <td className="py-2 px-4">{item.spent} USD</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Financials;
