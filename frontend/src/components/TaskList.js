import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <span>{task.status}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
