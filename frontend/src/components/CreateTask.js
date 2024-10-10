import React, { useState } from 'react';
import axios from 'axios';

const CreateTask = ({ onTaskCreated }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
    dueDate: '',
  });

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post('/api/tasks', formData, config);

      onTaskCreated(data); // Yeni görevi parent bileşene gönder

      // Formu temizle
      setFormData({
        title: '',
        description: '',
        status: '',
        dueDate: '',
      });
    } catch (error) {
      console.error('Error creating task:', error.response.data.message);
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Status:</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div>
          <label>Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
};

export default CreateTask;
