// src/components/TableView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TableView = () => {
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
      <h2>Table View</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Status</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id}>
              <td>{task.title}</td>
              <td>{task.description}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
