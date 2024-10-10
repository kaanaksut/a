// src/components/GanttView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GanttView = () => {
  const [tasks, setTasks] = useState([]);

  // Veritabanından görevleri çek
  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get('/api/tasks');
      setTasks(data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Gantt Chart</h2>
      <div className="gantt-chart">
        {tasks.map((task) => (
          <div key={task._id} className="gantt-bar">
            <h3>{task.title}</h3>
            <p>Due: {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttView;
