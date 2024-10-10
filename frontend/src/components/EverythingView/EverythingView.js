import React, { useState } from 'react';
import ListView from './ListView';
import BoardView from './BoardView';
import CalendarView from './CalendarView';
import GanttView from './GanttView';
import TableView from './TableView';
import './EverythingView.css';

const EverythingView = () => {
  const [activeView, setActiveView] = useState('List'); // Başlangıçta List aktif

  const renderActiveView = () => {
    switch (activeView) {
      case 'List':
        return <ListView />;
      case 'Board':
        return <BoardView />;
      case 'Calendar':
        return <CalendarView />;
      case 'Gantt':
        return <GanttView />;
      case 'Table':
        return <TableView />;
      default:
        return <ListView />;
    }
  };

  return (
    <div className="everything-page">
      <h2>Everything</h2>
      <div className="view-buttons">
        <button className={activeView === 'List' ? 'active' : ''} onClick={() => setActiveView('List')}>List</button>
        <button className={activeView === 'Board' ? 'active' : ''} onClick={() => setActiveView('Board')}>Board</button>
        <button className={activeView === 'Calendar' ? 'active' : ''} onClick={() => setActiveView('Calendar')}>Calendar</button>
        <button className={activeView === 'Gantt' ? 'active' : ''} onClick={() => setActiveView('Gantt')}>Gantt</button>
        <button className={activeView === 'Table' ? 'active' : ''} onClick={() => setActiveView('Table')}>+View</button>
      </div>
      <div className="task-board">
        {renderActiveView()}
      </div>
    </div>
  );
};

export default EverythingView;
