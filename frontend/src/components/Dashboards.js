import React from 'react';
import './Dashboard.css';
import { FaExternalLinkAlt, FaClipboard } from 'react-icons/fa';

const Dashboard = ({ projects = [] }) => {
  // Eğer projects undefined veya boşsa dashboard görünmez
  if (!projects || projects.length === 0) {
    return null; // Proje yoksa hiçbir şey render edilmez
  }

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      {projects.map((project) => (
        <div key={project.id} className="dashboard-item">
          <span>{project.name}</span>
          <div className="dashboard-icons">
            <button
              className="icon-btn"
              title="Open in new tab"
              onClick={() => alert('Opening dashboard in new tab...')}
            >
              <FaExternalLinkAlt />
            </button>
            <button
              className="icon-btn"
              title="Copy link"
              onClick={() => alert('Link copied!')}
            >
              <FaClipboard />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
