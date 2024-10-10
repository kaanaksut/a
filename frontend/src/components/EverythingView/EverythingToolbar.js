import React from 'react';
import './EverythingToolbar.css';

const EverythingToolbar = ({ viewMode, setViewMode }) => {
  return (
    <div className="toolbar-container">
      <div className="toolbar-buttons">
        <button 
          className={`toolbar-button ${viewMode === 'list' ? 'active' : ''}`}
          onClick={() => setViewMode('list')}
        >
          List
        </button>
        <button 
          className={`toolbar-button ${viewMode === 'board' ? 'active' : ''}`}
          onClick={() => setViewMode('board')}
        >
          Board
        </button>
        <button 
          className={`toolbar-button ${viewMode === 'calendar' ? 'active' : ''}`}
          onClick={() => setViewMode('calendar')}
        >
          Calendar
        </button>
        <button 
          className={`toolbar-button ${viewMode === 'custom' ? 'active' : ''}`}
          onClick={() => setViewMode('custom')}
        >
          + View
        </button>
      </div>

      <div className="toolbar-options">
        <button className="option-button">Group: Status</button>
        <button className="option-button">Subtasks: Collapse all</button>
        <button className="option-button">Columns</button>
        <button className="option-button">Filters</button>
        <button className="option-button">Show closed</button>
        <button className="option-button">Hide</button>
      </div>
      
      <div className="toolbar-actions">
        <input type="text" placeholder="Search tasks..." className="search-input" />
        <button className="add-task-btn">Add Task</button>
      </div>
    </div>
  );
};

export default EverythingToolbar;
