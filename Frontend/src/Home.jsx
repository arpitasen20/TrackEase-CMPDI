import React from 'react';

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r">
        <div className="p-4 text-xl font-bold">Feedback</div>
        <nav className="mt-4 space-y-4">
          <div className="text-gray-700">Home</div>
          <div>Feedback</div>
          <div>Reports</div>
          <div className="font-bold">Goals</div>
          <div>Surveys</div>
        </nav>
        <div className="p-4">
          <div className="mt-4">Teams</div>
          <div className="space-y-2">
            <div>Marketing</div>
            <div>Design</div>
            <div>Security</div>
            <div>Operations</div>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-2">
            <img
              src="https://via.placeholder.com/40"
              alt="John Smith"
              className="rounded-full"
            />
            <div className="flex flex-col">
              <span>John Smith</span>
              <span className="text-sm text-gray-500">johnsmith@email.c</span>
            </div>
          </div>
          <div className="mt-4">Settings</div>
          <div>Logout</div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-8">
        {/* Navbar */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Overview</h1>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border border-gray-300 rounded"
            />
            <div className="flex space-x-2">
              <button>?</button>
              <button>⚙️</button>
              <img
                src="https://via.placeholder.com/30"
                alt="User"
                className="rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Project Status */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="p-4 bg-red-200 rounded">
            <h2>Total Projects</h2>
            <p>5</p>
            <div className="mt-4 bg-gray-300 rounded-full h-1">
              <div className="w-2/5 bg-red-600 h-full rounded-full"></div>
            </div>
            <p>2 Active</p>
          </div>
          <div className="p-4 bg-red-200 rounded">
            <h2>Project Progress</h2>
            <p>75%</p>
            <div className="mt-4 bg-gray-300 rounded-full h-1">
              <div className="w-3/4 bg-red-600 h-full rounded-full"></div>
            </div>
            <p>On-time Completion</p>
          </div>
          <div className="p-4 bg-red-200 rounded">
            <h2>Tasks</h2>
            <p>23 Pending</p>
            <div className="mt-4 bg-gray-300 rounded-full h-1">
              <div className="w-1/3 bg-red-600 h-full rounded-full"></div>
            </div>
            <p>8 Completed</p>
          </div>
          <div className="p-4 bg-red-200 rounded">
            <h2>Documents</h2>
            <p>56 Files</p>
            <div className="mt-4 bg-gray-300 rounded-full h-1">
              <div className="w-1/2 bg-red-600 h-full rounded-full"></div>
            </div>
            <p>2GB Used</p>
          </div>
        </div>

        {/* Recent Activities */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Recent Activities</h2>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="p-4 bg-red-300 rounded">
              <h3>Task Assigned</h3>
              <p className="mt-2">You have been assigned a task for a new project.</p>
              <p className="mt-2 font-bold">Project Plan</p>
            </div>
            <div className="p-4 bg-red-300 rounded">
              <h3>Meeting with the team</h3>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur.</p>
              <p className="mt-2 font-bold">Lorem Ipsum</p>
            </div>
            <div className="p-4 bg-red-300 rounded">
              <h3>Team Meeting</h3>
              <p className="mt-2">Photos from the recent meeting.</p>
            </div>
            <div className="p-4 bg-red-300 rounded">
              <h3>Workspace</h3>
              <p className="mt-2">New workspace design for the upcoming project.</p>
              <p className="mt-2 font-bold">Fund Allocation</p>
            </div>
          </div>
        </div>

        {/* Recent Projects */}
        <div className="mt-8">
          <h2 className="text-xl font-bold">Recent Projects</h2>
          <table className="min-w-full mt-4 bg-white rounded-lg">
            <thead>
              <tr className="text-left border-b">
                <th className="p-4">Name</th>
                <th className="p-4">Size</th>
                <th className="p-4">Team</th>
                <th className="p-4">Last Updated</th>
                <th className="p-4">Share</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4">Project Plan</td>
                <td className="p-4">2.3 MB</td>
                <td className="p-4">Private</td>
                <td className="p-4">23/08/2023 10:15 AM</td>
                <td className="p-4">📤</td>
              </tr>
              <tr>
                <td className="p-4">Project Report</td>
                <td className="p-4">1.5 MB</td>
                <td className="p-4">Only Me</td>
                <td className="p-4">23/08/2023 10:15 AM</td>
                <td className="p-4">📤</td>
              </tr>
              <tr>
                <td className="p-4">Project Presentation</td>
                <td className="p-4">1.2 MB</td>
                <td className="p-4">Team</td>
                <td className="p-4">22/08/2023 05:30 PM</td>
                <td className="p-4">📤</td>
              </tr>
              <tr>
                <td className="p-4">Budget Plan</td>
                <td className="p-4">2.1 MB</td>
                <td className="p-4">Only Me</td>
                <td className="p-4">23/08/2023 10:15 AM</td>
                <td className="p-4">📤</td>
              </tr>
              <tr>
                <td className="p-4">Project Video</td>
                <td className="p-4">45 MB</td>
                <td className="p-4">Me, John</td>
                <td className="p-4">22/08/2023 05:30 PM</td>
                <td className="p-4">📤</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
