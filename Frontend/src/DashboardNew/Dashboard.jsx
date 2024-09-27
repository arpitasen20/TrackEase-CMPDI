// components/Dashboard.jsx
import ProjectStatus from './ProjectStatus'
import RecentActivities from './RecentActivities'
import RecentProjects from './RecentProjects'

function Dashboard() {
  return (
    <div className="p-6">
      <ProjectStatus />
      <RecentActivities />
      <RecentProjects />
    </div>
  )
}

export default Dashboard