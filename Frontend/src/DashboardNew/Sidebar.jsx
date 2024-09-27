// components/Sidebar.jsx
import { useState } from 'react';

function Sidebar() {
  const [activeItem, setActiveItem] = useState('Goals');

  const menuItems = [
    { icon: '💬', label: 'Feedback' },
    { icon: '🏠', label: 'Home' },
    { icon: '🏢', label: 'Feedback' },
    { icon: '📊', label: 'Reports' },
    { icon: '🎯', label: 'Goals' },
    { icon: '📝', label: 'Surveys' },
  ];

  const teamItems = [
    { icon: '🎨', label: 'Marketing' },
    { icon: '✏️', label: 'Design' },
    { icon: '🔒', label: 'Security' },
    { icon: '⚙️', label: 'Operations' },
  ];

  return (
    <div className="w-64 bg-gray-100 h-screen flex flex-col">
      <div className="p-4 font-bold text-xl flex items-center">
        <span className="mr-2">💬</span>
        Feedback
      </div>
      <nav className="flex-grow">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.label}
            {...item}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
        <div className="mt-6 mb-2 px-4 text-sm font-semibold text-gray-500">Teams</div>
        {teamItems.map((item) => (
          <MenuItem 
            key={item.label}
            {...item}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <img src="https://via.placeholder.com/40" alt="John Smith" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="font-semibold">John Smith</div>
            <div className="text-xs text-gray-500">johnsmith@email.c</div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <MenuItem icon="⚙️" label="Settings" />
        <MenuItem icon="↪️" label="Log out" />
      </div>
    </div>
  );
}

function MenuItem({ icon, label, isActive, onClick }) {
  return (
    <div 
      className={`flex items-center px-4 py-2 cursor-pointer ${isActive ? 'bg-white' : 'hover:bg-gray-200'}`}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span className={`${isActive ? 'font-semibold' : ''}`}>{label}</span>
    </div>
  );
}

export default Sidebar;