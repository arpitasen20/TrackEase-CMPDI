import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaFileAlt, FaChartPie, FaProjectDiagram, FaQuestionCircle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'text-black font-bold bg-blue-100'
            : 'text-gray-950 hover:text-black hover:bg-gray-100';
    };

    const menuItems = [
        { path: '/home', label: 'Home', icon: <FaHome /> },
        { path: '/project', label: 'Project Management', icon: <FaProjectDiagram /> },
        { path: '/financials', label: 'Financials', icon: <FaChartPie /> },
        { path: '/documents', label: 'Documents', icon: <FaFileAlt /> },
        { path: '/reports', label: 'Progress Reports', icon: <FaChartPie /> },
        { path: '/help', label: 'Help & Support', icon: <FaQuestionCircle /> },
        { path: '/settings', label: 'Settings', icon: <FaCog /> },
        { path: '/signout', label: 'Sign out', icon: <FaSignOutAlt /> }, 
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-blue-300 p-5 shadow-lg z-50 transition-transform duration-300 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button
                onClick={toggleSidebar}
                className="absolute top-5 right-5 text-2xl text-gray-950 hover:text-black transition-colors"
            >
                <IoMdClose />
            </button>
            <ul className="space-y-4 pt-20">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path} className={`flex items-center p-3 rounded-lg transition-colors ${getLinkClass(item.path)}`}>
                            <span className="mr-3 text-xl">{item.icon}</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default Sidebar;
