import React, { useState } from 'react';
import './Modal.css';

const CreateTaskModal = ({ onClose, onCreate }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'Not Started',
    dueDate: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData); // Pass the task back to the parent
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Create New Task</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={formData.title} 
            onChange={handleChange} 
          />
          <textarea 
            name="description" 
            placeholder="Description" 
            value={formData.description} 
            onChange={handleChange} 
          ></textarea>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <input 
            type="date" 
            name="dueDate" 
            value={formData.dueDate} 
            onChange={handleChange} 
          />
          <button type="submit">Create Task</button>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskModal;
