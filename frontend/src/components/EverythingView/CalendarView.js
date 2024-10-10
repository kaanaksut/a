// src/components/CalendarView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalendarView = () => {
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
      <h2>Calendar View</h2>
      <div className="calendar">
        {tasks.map((task) => (
          <div key={task._id} className="calendar-task">
            <h3>{task.title}</h3>
            <p>Due: {task.dueDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
