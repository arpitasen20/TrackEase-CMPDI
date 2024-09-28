import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing/Landingpg';
import Home from './Home/Home';
import Dashboard from './Home/Dashboard';
import Project from './Home/Project';
import Financials from './Home/Financials';
import Documents from './Home/Documents';
import Reports from './Home/Reports';
import Help from './Home/Help';
import Settings from './Home/Settings';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing /> }/>
        <Route path="/home" element={ <Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />}/>
        <Route path="/financials" element={<Financials />}/>
        <Route path="/documents" element={<Documents />}/>
        <Route path="/reports" element={<Reports />}/>
        <Route path="/help" element={<Help />}/>
        <Route path="/settings"element={<Settings />}/>
        {/* <Route path="/signout" element={<Signout />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
