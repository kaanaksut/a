// src/components/BoardView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BoardView = () => {
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
      <h2>Task Board</h2>
      <div className="board">
        {tasks.map((task) => (
          <div key={task._id} className="board-card">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Due: {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardView;
