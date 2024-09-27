// components/ProjectStatus.jsx
function ProjectStatus() {
    return (
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatusCard title="Total Projects" value="5" subtext="2 Active" />
        <StatusCard title="Project Progress" value="75%" subtext="On-time Completion" />
        <StatusCard title="Tasks" value="23 Pending" subtext="8 Completed" />
        <StatusCard title="Documents" value="58 Files" subtext="2GB Used" />
      </div>
    )
  }
  
  function StatusCard({ title, value, subtext }) {
    return (
      <div className="bg-pink-100 p-4 rounded-lg">
        <h3 className="font-bold">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-sm">{subtext}</p>
      </div>
    )
  }
  
  export default ProjectStatus