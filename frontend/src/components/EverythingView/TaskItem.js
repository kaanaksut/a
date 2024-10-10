import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
};

export default TaskItem;
