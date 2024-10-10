import React, { useState } from 'react';
import { FaEllipsisH, FaSearch, FaPlus } from 'react-icons/fa';
import CreateSpaceModal from './CreateSpaceModal'; // Modal'ı import ediyoruz
import './Spaces.css';

const Spaces = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal açık mı?

  return (
    <div className="spaces">
      <div className="spaces-header">
        <h3>Spaces</h3>
        <div className="icon-button-group">
          <button className="icon-button small-icon-button">
            <FaEllipsisH className="icon" />
          </button>
          <button className="icon-button small-icon-button">
            <FaSearch className="icon" />
          </button>
          <button
            className="icon-button small-icon-button"
            onClick={() => setIsModalOpen(true)} // Modal'ı açan buton
          >
            <FaPlus className="icon" />
          </button>
        </div>
      </div>
      
      {/* Spaces içeriği */}
      <div className="spaces-list">
        <div className="space-item active">
          <span className="space-icon">🌍</span> Everything
        </div>
        <div className="space-item">
          <span className="space-icon">📂</span> View All Spaces
        </div>
        <div className="space-item">
          <span className="space-icon">➕</span> Create Space
        </div>
      </div>

      {/* Modal'ı burada gösteriyoruz */}
      {isModalOpen && <CreateSpaceModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Spaces;
