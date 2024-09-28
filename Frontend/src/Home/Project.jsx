import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { FaSearch, FaEllipsisV } from 'react-icons/fa';
import 'chart.js/auto';

const Project = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chartVisible, setChartVisible] = useState(false);
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterInvestigator, setFilterInvestigator] = useState('');
  const [filterAgency, setFilterAgency] = useState('');
  const [filterDuration, setFilterDuration] = useState('');
  const [filterOutlay, setFilterOutlay] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // To track which project menu is open

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const timeout = setTimeout(() => setChartVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const projects = [
    {
      title: 'Project A',
      investigator: 'Dr. Smith',
      agencies: 'Agency 1, Agency 2',
      duration: '2023-2024',
      outlay: '1M USD',
      code: 'PJT-12345',
      status: 'Active',
    },
    {
      title: 'Project B',
      investigator: 'Dr. Johnson',
      agencies: 'Agency 3',
      duration: '2022-2025',
      outlay: '2M USD',
      code: 'PJT-67890',
      status: 'Completed',
    },
    {
      title: 'Project C',
      investigator: 'Dr. Adams',
      agencies: 'Agency 4',
      duration: '2023-2025',
      outlay: '500K USD',
      code: 'PJT-11223',
      status: 'Overdue',
    },
  ];

  // Filter Projects
  const filteredProjects = projects.filter(project =>
    (filterStatus === 'All' || project.status === filterStatus) &&
    (project.title.toLowerCase().includes(searchTerm.toLowerCase()) || project.investigator.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (filterInvestigator === '' || project.investigator.toLowerCase().includes(filterInvestigator.toLowerCase())) &&
    (filterAgency === '' || project.agencies.toLowerCase().includes(filterAgency.toLowerCase())) &&
    (filterDuration === '' || project.duration.includes(filterDuration)) &&
    (filterOutlay === '' || project.outlay.includes(filterOutlay))
  );

  const handleMenuToggle = (index) => {
    if (openMenu === index) {
      setOpenMenu(null); // Close the currently open menu
    } else {
      setOpenMenu(index); // Open the selected menu
    }
  };

  // Placeholder chart data
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Progress',
        data: [65, 59, 80, 81, 56],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const burndownData = {
    labels: ['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4'],
    datasets: [
      {
        label: 'Burndown',
        data: [30, 25, 20, 10],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [
      {
        label: 'Budget Utilization',
        data: [50, 75, 60, 90],
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Resource A', 'Resource B', 'Resource C'],
    datasets: [
      {
        label: 'Resource Allocation',
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
            <h1 className="text-3xl font-bold">Project Management Dashboard</h1>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:scale-105 hover:bg-blue-700 transition">+ Add New Project</button>
          </div>

          {/* Search and Filter Options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button onClick={() => setFilterStatus('Active')} className="bg-blue-500 text-white hover:scale-105 px-4 py-2 rounded">Active</button>
              <button onClick={() => setFilterStatus('Completed')} className="bg-green-500 text-white hover:scale-105 px-4 py-2 rounded">Completed</button>
              <button onClick={() => setFilterStatus('Overdue')} className="bg-red-500 text-white px-4 hover:scale-105 py-2 rounded">Overdue</button>
              <button onClick={() => setFilterStatus('All')} className="bg-gray-500 text-white px-4 hover:scale-105 py-2 rounded">All</button>
            </div>
            <div className="relative flex items-center">
              <FaSearch className="absolute left-3 top-3 text-gray-500" />
              <input
                type="text"
                className="pl-10 pr-4 py-2 rounded border"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Dropdown Filters */}
          <div className="flex space-x-4 mb-6">
            <select className="border rounded px-4 py-2" value={filterInvestigator} onChange={(e) => setFilterInvestigator(e.target.value)}>
              <option value="">Filter by Investigator</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Adams">Dr. Adams</option>
            </select>
            <select className="border rounded px-4 py-2" value={filterAgency} onChange={(e) => setFilterAgency(e.target.value)}>
              <option value="">Filter by Agency</option>
              <option value="Agency 1">Agency 1</option>
              <option value="Agency 2">Agency 2</option>
              <option value="Agency 3">Agency 3</option>
            </select>
            <select className="border rounded px-4 py-2" value={filterDuration} onChange={(e) => setFilterDuration(e.target.value)}>
              <option value="">Filter by Duration</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <select className="border rounded px-4 py-2" value={filterOutlay} onChange={(e) => setFilterOutlay(e.target.value)}>
              <option value="">Filter by Outlay</option>
              <option value="1M USD">1M USD</option>
              <option value="2M USD">2M USD</option>
              <option value="500K USD">500K USD</option>
            </select>
          </div>

          {/* Projects List */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Filtered Projects</h2>
              <button className="text-blue-600 hover:text-blue-800 font-semibold transition">See All</button>
            </div>

            {filteredProjects.length > 0 ? (
              <ul className="divide-y divide-gray-500">
                {filteredProjects.map((project, index) => (
                  <li key={index} className="py-10  relative">
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p>Investigator: {project.investigator}</p>
                      <p>Agencies: {project.agencies}</p>
                      <p>Duration: {project.duration}</p>
                      <p>Outlay: {project.outlay}</p>
                      <p>Project Code: {project.code}</p>
                      <p>Status: {project.status}</p>
                    </div>

                    {/* Three Dots Menu */}
                    <div className="absolute top-4 right-0">
                      <button onClick={() => handleMenuToggle(index)} className="text-gray-500 hover:text-gray-700">
                        <FaEllipsisV />
                      </button>

                      {openMenu === index && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Assign Task</button>
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Edit</button>
                          <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">Manage Access</button>
                          <button className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100">Delete</button>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No projects found matching the filters.</p>
            )}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-4 bg-lime-400">Project Progress (%)</h3>
              <Bar data={barData} className='bg-orange-200'/>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-lime-400">Burndown Chart</h3>
              <Line data={burndownData} className='bg-orange-200'/>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-lime-400">Budget Utilization & Progress</h3>
              <Line data={lineData} className='bg-orange-200'/>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-lime-400">Resource Allocation</h3>
              <Pie data={pieData} className='bg-orange-200'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
