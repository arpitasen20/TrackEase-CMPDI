// components/RecentProjects.jsx
import { useState } from 'react';

function RecentProjects() {
  const [projects, setProjects] = useState([
    { name: 'Project plan', size: '2.3 MB', team: 'Private', lastUpdated: '23/08/2023 10:15 AM', icon: '📄', teamIcon: '🔒' },
    { name: 'Project report', size: '1.5 MB', team: 'Only me', lastUpdated: '23/08/2023 10:15 AM', icon: '📄', teamIcon: '👤' },
    { name: 'Project presentation', size: '1.2 MB', team: 'Team', lastUpdated: '22/08/2023 05:30 PM', icon: '🎭', teamIcon: '👥' },
    { name: 'Budget plan', size: '2.1 MB', team: 'Only me', lastUpdated: '23/08/2023 10:15 AM', icon: '💰', teamIcon: '👤' },
    { name: 'Project video', size: '45 MB', team: 'Me, John', lastUpdated: '22/08/2023 05:30 PM', icon: '🎥', teamIcon: '👥' },
  ]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Recent projects</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-2 font-normal">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Name <span className="ml-1">↓</span>
              </div>
            </th>
            <th className="pb-2 font-normal">Status</th>
            <th className="pb-2 font-normal">Team</th>
            <th className="pb-2 font-normal">
              <div className="flex items-center">
                Last updated <span className="ml-1">🕒</span>
              </div>
            </th>
            <th className="pb-2 font-normal">Share</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-b last:border-b-0">
              <td className="py-3">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="mr-2">{project.icon}</span>
                  {project.name}
                </div>
              </td>
              <td>{project.size}</td>
              <td>
                <div className="flex items-center">
                  <span className="mr-1">{project.teamIcon}</span>
                  {project.team}
                </div>
              </td>
              <td>{project.lastUpdated}</td>
              <td>
                {project.team === 'Private' ? (
                  <button className="text-blue-500">+</button>
                ) : (
                  <button className="text-blue-500">
                    {project.team === 'Only me' ? '📄' : '🔗'}
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentProjects;