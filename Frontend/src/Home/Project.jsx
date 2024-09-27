import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { FaSearch } from 'react-icons/fa';
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
    // Add more project details as needed
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

  // Sample chart data
  const barData = {
    labels: ['Project A', 'Project B', 'Project C'],
    datasets: [
      {
        label: 'Progress (%)',
        data: [60, 100, 40],
        backgroundColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,99,132,1)'],
        borderWidth: 1,
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Milestone Completion',
        data: [0, 20, 40, 60, 80],
        fill: false,
        backgroundColor: '#42A5F5',
        borderColor: '#42A5F5',
      },
    ],
  };

  const burndownData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Tasks Remaining',
        data: [30, 20, 10, 0],
        fill: false,
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
      },
    ],
  };

  const pieData = {
    labels: ['Active', 'Completed', 'Overdue'],
    datasets: [
      {
        label: '# of Projects',
        data: [10, 5, 3],
        backgroundColor: ['rgba(75,192,192,1)', 'rgba(153,102,255,1)', 'rgba(255,99,132,1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex relative p-10 pt-20 bg-gray-100 min-h-screen">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">Project Management Dashboard</h1>

          {/* Search and Filter Options */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-4">
              <button onClick={() => setFilterStatus('Active')} className="bg-blue-500 text-white px-4 py-2 rounded">Active</button>
              <button onClick={() => setFilterStatus('Completed')} className="bg-green-500 text-white px-4 py-2 rounded">Completed</button>
              <button onClick={() => setFilterStatus('Overdue')} className="bg-red-500 text-white px-4 py-2 rounded">Overdue</button>
              <button onClick={() => setFilterStatus('All')} className="bg-gray-500 text-white px-4 py-2 rounded">All</button>
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

          {/* Dropdown Filters in One Row */}
          <div className="flex space-x-4 mb-6">
            <select
              className="border rounded px-4 py-2"
              value={filterInvestigator}
              onChange={(e) => setFilterInvestigator(e.target.value)}
            >
              <option value="">Filter by Investigator</option>
              {/* Add options dynamically based on your data */}
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Adams">Dr. Adams</option>
            </select>
            <select
              className="border rounded px-4 py-2"
              value={filterAgency}
              onChange={(e) => setFilterAgency(e.target.value)}
            >
              <option value="">Filter by Agency</option>
              {/* Add options dynamically based on your data */}
              <option value="Agency 1">Agency 1</option>
              <option value="Agency 2">Agency 2</option>
              <option value="Agency 3">Agency 3</option>
            </select>
            <select
              className="border rounded px-4 py-2"
              value={filterDuration}
              onChange={(e) => setFilterDuration(e.target.value)}
            >
              <option value="">Filter by Duration</option>
              {/* Add options dynamically based on your data */}
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <select
              className="border rounded px-4 py-2"
              value={filterOutlay}
              onChange={(e) => setFilterOutlay(e.target.value)}
            >
              <option value="">Filter by Outlay</option>
              {/* Add options dynamically based on your data */}
              <option value="500K USD">500K USD</option>
              <option value="1M USD">1M USD</option>
              <option value="2M USD">2M USD</option>
            </select>
          </div>

          {/* Centralized View of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {filteredProjects.map(project => (
              <div key={project.code} className="bg-white shadow-md rounded-lg p-4">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-600"><strong>Investigator:</strong> {project.investigator}</p>
                <p className="text-gray-600"><strong>Agencies:</strong> {project.agencies}</p>
                <p className="text-gray-600"><strong>Duration:</strong> {project.duration}</p>
                <p className="text-gray-600"><strong>Outlay:</strong> {project.outlay}</p>
                <p className="text-gray-600"><strong>Project Code:</strong> {project.code}</p>
                <p className={`text-${project.status === 'Active' ? '[blue]' : project.status === 'Completed' ? '[green]' : '[red]'}500`}>
                  {project.status}
                </p>
              </div>
            ))}
          </div>

          {/* Chart Sections - Two Charts Per Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-6 mb=6">
            {/* Progress Tracking Chart */}
            {chartVisible ? (
                <>
                  <div className="bg-white shadow-md rounded-lg p=6">
                    <h2 className="text=2xl  font-semibold mb=4">Progress Tracking</h2>
                    <Bar data={barData} />
                  </div>

                  {/* Milestone Tracking Chart */}
                  <div className="bg-white shadow-md rounded-lg p=6">
                    <h2 className="text=2xl font-semibold mb=4">Milestone Tracking</h2>
                    <Line data={lineData} />
                  </div>

                  {/* Burn-down Chart */}
                  <div className="bg-white shadow-md rounded-lg p=6">
                    <h2 className="text=2xl font-semibold mb=4">Burn-down Chart</h2>
                    <Line data={burndownData} />
                  </div>

                  {/* Resource Allocation Chart */}
                  <div className="bg-white shadow-md rounded-lg p=6">
                    <h2 className="text=2xl font-semibold mb=4">Resource Allocation</h2>
                    <Pie data={pieData} />
                  </div>
                </>
            ) : (
                <>
                  {/* Placeholder for loading state */}
                  {[...Array(4)].map((_, index) => (
                    <div key={index} className='bg-gray-200 h-[200px] animate-pulse rounded-lg'></div> 
                  ))}
                </>
            )}
          </div>

          {/* Admin Console Section */}
          <div className="bg-white shadow-md rounded-lg p=6 mb=6">
            <h2 className="text=2xl font-semibold mb=4">Admin Console</h2>
            <p>Manage user access and permissions.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;