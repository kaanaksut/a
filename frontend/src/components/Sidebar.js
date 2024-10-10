import React, { useState } from 'react';
import { FaGlobe,FaEye,FaHome, FaInbox, FaComments, FaFileAlt, FaChartBar, FaClock, FaEllipsisH, FaPlus } from 'react-icons/fa';
import CreateSpaceModal from './CreateSpaceModal'; // Modal bileşenini import ediyoruz
import './Siderbar.css';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal kontrolü için state

  return (
    <div className="sidebar">
      {/* Sidebar navigasyon kısmı */}
      <button className={`sidebar-item ${activeTab === 'Home' ? 'active' : ''}`} onClick={() => setActiveTab('Home')}>
        <FaHome className="icon" /> Home
      </button>
      <button className={`sidebar-item ${activeTab === 'Inbox' ? 'active' : ''}`} onClick={() => setActiveTab('Inbox')}>
        <FaInbox className="icon" /> Inbox
      </button>
      <button className={`sidebar-item ${activeTab === 'Chat' ? 'active' : ''}`} onClick={() => setActiveTab('Chat')}>
        <FaComments className="icon" /> Chat
      </button>
      <button className={`sidebar-item ${activeTab === 'Docs' ? 'active' : ''}`} onClick={() => setActiveTab('Docs')}>
        <FaFileAlt className="icon" /> Docs
      </button>
      <button className={`sidebar-item ${activeTab === 'Dashboards' ? 'active' : ''}`} onClick={() => setActiveTab('Dashboards')}>
        <FaChartBar className="icon" /> Dashboards
      </button>
      <button className={`sidebar-item ${activeTab === 'Timesheets' ? 'active' : ''}`} onClick={() => setActiveTab('Timesheets')}>
        <FaClock className="icon" /> Timesheets
      </button>

      {/* Spaces bölüm başlığı ve ikon butonları */}
      <div className="spaces">
        <div className="spaces-header">
          <h3 className="spaces-title">Spaces</h3>
          <div className="icon-button-group">
            <button className="icon-button small-icon-button">
              <FaEllipsisH className="icon" />
            </button>
            <button className="icon-button small-icon-button" onClick={() => setIsModalOpen(true)}>
              <FaPlus className="icon" />
            </button>
          </div>
        </div>
        <div className="spaces-content">
          <button className={`space-item ${activeTab === 'Everything' ? 'active' : ''}`} onClick={() => setActiveTab('Everything')}>
            <FaGlobe className="icon" /> Everything
          </button>
          <button className="space-item">
            <FaEye className="icon" /> View All Spaces
          </button>
          <button className="space-item" onClick={() => setIsModalOpen(true)}>
            <FaPlus className="icon" /> Create Space
          </button>
        </div>
      </div>

      {/* CreateSpaceModal, butona tıklanınca açılır */}
      {isModalOpen && <CreateSpaceModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Sidebar;
