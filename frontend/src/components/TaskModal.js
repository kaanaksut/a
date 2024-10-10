import React, { useState } from 'react';
import './TaskModal.css';  // Stil dosyası eklenecek

const TaskModal = ({ isOpen, onClose }) => {
  const [task, setTask] = useState({
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Task Created:', task);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Create Task</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <div className="modal-body">
          <input
            type="text"
            name="name"
            placeholder="Task name"
            value={task.name}
            onChange={handleInputChange}
          />
          <textarea
            name="description"
            placeholder="Task description"
            value={task.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="modal-footer">
          <button className="create-task-button" onClick={handleSubmit}>Create Task</button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
