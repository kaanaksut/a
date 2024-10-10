import React, { useState, useRef, useEffect } from 'react';
import './AssignedToMe.css';

const AssignedToMe = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null); // Modal için referans oluşturuyoruz

  // Modalı açma ve kapama işlevleri
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Sayfa dışına tıklanıldığında modalı kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false); // Modalın dışına tıklanınca kapat
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="assigned-to-me card">
      <div className="header">
        <h2>Assigned to me</h2>
        <div className="actions">
          <button className="icon-btn" title="Add task" onClick={handleModalOpen}>
            <span role="img" aria-label="add-task">➕</span>
          </button>
          <button className="icon-btn" title="Expand" onClick={() => console.log('Expand')}>
            ⛶
          </button>
          <button className="icon-btn" title="More settings" onClick={() => console.log('More settings')}>
            ⋮
          </button>
        </div>
      </div>

      <div className="empty-state">
        <span role="img" aria-label="check" className="checkmark">✔️</span>
        <p>Tasks assigned to you will appear here. <a href="#">Learn more</a></p>
        <button className="add-task-button" onClick={handleModalOpen}>+ Add task</button>
      </div>

      {/* Task Ekleme Modalı */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content" ref={modalRef}>
            <h2>Add Task</h2>
            <form>
              <div className="form-group">
                <label>Task Name:</label>
                <input type="text" placeholder="Enter task name" />
              </div>
              <div className="form-group">
                <label>Description:</label>
                <textarea placeholder="Add description"></textarea>
              </div>
              <div className="form-group">
                <label>Due Date:</label>
                <input type="date" />
              </div>
              <div className="form-group">
                <label>Priority:</label>
                <select>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button type="button" onClick={handleModalClose}>
                Close
              </button>
              <button type="submit">Create Task</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignedToMe;
