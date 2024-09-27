// components/RecentActivities.jsx
function RecentActivities() {
    return (
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
        <div className="grid grid-cols-4 gap-4">
          <ActivityCard title="Task Assigned" description="You have been assigned a task for a new project. Please check it out." icon="📋" />
          <ActivityCard title="Meeting with the team" description="Prepare documents for the meeting." icon="👥" />
          <ActivityCard title="Team Meeting" description="" icon="🤝" />
          <ActivityCard title="Workspace" description="New workspace created for the upcoming project." icon="💼" />
        </div>
      </div>
    )
  }
  
  function ActivityCard({ title, description, icon }) {
    return (
      <div className="bg-red-200 p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="mr-2">{icon}</span>
          <h3 className="font-bold">{title}</h3>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    )
  }
  
  export default RecentActivities