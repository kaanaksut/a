import React, { useEffect, useState } from 'react';
import axiosInstance from './axiosInstance'; // Az önce oluşturduğumuz axiosInstance

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axiosInstance.get('http://localhost:5000/api/tasks');
        setTasks(response.data); // Gelen veriyi tasks durumuna atıyoruz
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Something went wrong');
        setLoading(false);
      }
    };

    fetchTasks();
  }, []); // useEffect sadece component yüklendiğinde çalışacak

  if (loading) return <p>Loading tasks...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
