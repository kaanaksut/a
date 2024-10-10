import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Sidebar from './components/Sidebar'; 
import ChatContent from './components/ChatContent'; 
import Home from './components/Home';
import Inbox from './components/Inbox';
import Chat from './components/Chat';
import Docs from './components/Docs';
import Dashboards from './components/Dashboards';
import Timesheets from './components/Timesheets';
import More from './components/More';
import EverythingPage from './pages/EverythingPage'; 
import ListView from './components/EverythingView/ListView'; 
import BoardView from './components/EverythingView/BoardView'; 
import GanttView from './components/EverythingView/GanttView'; 
import CalendarView from './components/EverythingView/CalendarView'; 
import TableView from './components/EverythingView/TableView'; 

const App = () => {
  const [activeTab, setActiveTab] = useState('Everything');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'Inbox':
        return <Inbox />;
      case 'Chat':
        return <Chat />;
      case 'Docs':
        return <Docs />;
      case 'Dashboards':
        return <Dashboards />;
      case 'Timesheets':
        return <Timesheets />;
      case 'More':
        return <More />;
      case 'Everything':
        return <EverythingPage />;
      default:
        return <Home />;
    }
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="main-content">
          <div className="top-bar">
            <input type="text" placeholder="Search..." className="search-bar" />
            <div className="top-bar-icons">
              <span title="Notifications">🔔</span>
              <span title="Profile">👤</span>
            </div>
          </div>
          <div className="content">
            <Routes>
              <Route path="/list" element={<ListView />} />
              <Route path="/board" element={<BoardView />} />
              <Route path="/gantt" element={<GanttView />} />
              <Route path="/calendar" element={<CalendarView />} />
              <Route path="/table" element={<TableView />} />
              <Route path="/" element={renderContent()} />
            </Routes>
            <ChatContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
