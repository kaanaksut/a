import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Home</h1>
      <div className="grid-container">
        <div className="card">
          <h2>Recents</h2>
          <p>Project 1 in Project Notes</p>
          <p>Dashboard</p>
        </div>
        <div className="card">
          <h2>Agenda</h2>
          <p>Agenda items from your calendar will show here.</p>
          <button>Add calendar integrations</button>
        </div>
        <div className="card">
          <h2>My Work</h2>
          <p>Tasks and reminders assigned to you will show here.</p>
          <button>Add task or reminder</button>
        </div>
        <div className="card">
          <h2>Assigned to me</h2>
          <p>Tasks assigned to you will appear here.</p>
          <button>Add task</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
