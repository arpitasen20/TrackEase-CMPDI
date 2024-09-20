import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

// Dummy data for the dashboard
const dummyData = {
  budget: {
    total: '₹ 175 Crores',
    spent: '₹ 112.50 Crores',
    remaining: '₹ 62.50 Crores',
  },
  approvals: {
    approved: 63,
    pending: 37,
  },
  projectStatus: {
    active: 20,
    pending: 26,
    completed: 54,
  },
  liveProjects: [
    { id: '6465', investigator: 'Dr. N. Verma', status: 'Completed', budget: '₹ 3 Crore' },
    { id: '5665', investigator: 'Dr. T. Singh', status: 'Pending', budget: '₹ 2 Crore' },
    { id: '1755', investigator: 'Dr. R. Mehta', status: 'Delayed', budget: '₹ 1 Crore' },
  ],
};

// Data for the Project Status Pie Chart
const projectStatusData = {
  labels: ['Active Projects', 'Pending Projects', 'Completed Projects'],
  datasets: [
    {
      label: 'Project Status',
      data: [dummyData.projectStatus.active, dummyData.projectStatus.pending, dummyData.projectStatus.completed],
      backgroundColor: ['#4CAF50', '#FFC107', '#F44336'],
      hoverOffset: 4,
    },
  ],
};

// Data for the Project Approvals Pie Chart
const approvalsData = {
  labels: ['Approved', 'Pending'],
  datasets: [
    {
      label: 'Project Approvals',
      data: [dummyData.approvals.approved, dummyData.approvals.pending],
      backgroundColor: ['#4CAF50', '#F44336'],
      hoverOffset: 4,
    },
  ],
};

const Dashboard = () => {
  return (
    <div className="min-h-screen p-8 bg-gray-50">
      {/* Back Button and Profile Icon */}
      <div className="flex justify-between items-center">
        <button className="text-2xl">
          &#8592;
        </button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="rounded-full w-10 h-10"
        />
      </div>

      {/* Grid Layout for the Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Budget Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Budget Overview</h3>
          <p className="mt-4 text-2xl font-bold">{dummyData.budget.total}</p>
          <p className="text-sm text-gray-500">Total Spent: {dummyData.budget.spent}</p>
          <p className="text-sm text-red-500">Total Remaining: {dummyData.budget.remaining}</p>
        </div>

        {/* Project Approvals */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Project Approvals</h3>
          <div className="w-32 mx-auto my-4">
            <Pie data={approvalsData} />
          </div>
          <div className="mt-4 flex justify-between">
            <span className="text-green-600">Approved</span>
            <span>{dummyData.approvals.approved}%</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-red-600">Pending</span>
            <span>{dummyData.approvals.pending}%</span>
          </div>
        </div>

        {/* Project Status */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Project Status</h3>
          <div className="w-32 mx-auto my-4">
            <Pie data={projectStatusData} />
          </div>
          <div className="mt-4 flex justify-between">
            <span className="text-green-600">Active Projects</span>
            <span>{dummyData.projectStatus.active}%</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-yellow-600">Pending Projects</span>
            <span>{dummyData.projectStatus.pending}%</span>
          </div>
          <div className="mt-2 flex justify-between">
            <span className="text-blue-600">Completed Projects</span>
            <span>{dummyData.projectStatus.completed}%</span>
          </div>
        </div>
      </div>

      {/* Search and Live Project Status */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Search Project */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold">Search Project</h3>
          <div className="flex space-x-4 mt-4">
            <div className="w-1/2">
              <input
                type="text"
                className="w-full border rounded-lg p-2"
                placeholder="Project ID"
              />
            </div>
            <div className="w-1/2">
              <select className="w-full border rounded-lg p-2">
                <option>Project Status</option>
                <option>Completed</option>
                <option>Pending</option>
                <option>Delayed</option>
              </select>
            </div>
            <button className="bg-blue-500 text-white rounded-lg px-4">Check</button>
          </div>
        </div>

        {/* Live Project Status */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold">Live Project Status</h3>
          <table className="w-full mt-4 text-left">
            <thead>
              <tr>
                <th>No.</th>
                <th>Investigator</th>
                <th>Status</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.liveProjects.map((project, index) => (
                <tr key={index} className="border-b">
                  <td>{index + 1}</td>
                  <td>{project.investigator}</td>
                  <td>
                    <span
                      className={`text-sm font-medium ${
                        project.status === 'Completed'
                          ? 'text-blue-500'
                          : project.status === 'Pending'
                          ? 'text-yellow-500'
                          : 'text-red-500'
                      }`}
                    >
                      {project.status}
                    </span>
                  </td>
                  <td>{project.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
