import React from 'react';
import TaskList from './TaskList';

const TaskPage = ({ tasks }) => {
  return (
    <div>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default TaskPage;
