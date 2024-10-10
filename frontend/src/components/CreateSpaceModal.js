import React, { useState } from 'react';
import './CreateSpaceModal.css'; // Modal stil dosyasını import ediyoruz

const CreateSpaceModal = ({ onClose }) => {
  const [spaceName, setSpaceName] = useState('');
  const [description, setDescription] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  const handleCreate = () => {
    if (!spaceName.trim()) {
      alert('Space name is required');
      return;
    }
    console.log({ spaceName, description, isPrivate });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Create a Space</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        <p>A space represents teams, departments, or groups, each with its own Lists, workflows, and settings.</p>
        <form className="space-form">
          <label>
            Icon & Name
            <input
              type="text"
              placeholder="e.g. Marketing, Engineering, HR"
              value={spaceName}
              onChange={(e) => setSpaceName(e.target.value)}
              required
            />
          </label>
          <label>
            Description (optional)
            <textarea
              placeholder="Description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="form-footer">
            <label>
              <input
                type="checkbox"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              /> Make Private
            </label>
          </div>
        </form>
        <div className="modal-actions">
          <button className="modal-button" onClick={onClose}>Cancel</button>
          <button className="modal-button-primary" onClick={handleCreate}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default CreateSpaceModal;
