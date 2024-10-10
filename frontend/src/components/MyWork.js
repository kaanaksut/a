import React, { useState, useRef, useEffect } from 'react';
import './MyWork.css';
import { FaCog, FaExpand, FaEllipsisH, FaTrash } from 'react-icons/fa';

const MyWork = () => {
  const [showSettings, setShowSettings] = useState(false); // More settings açılır menüsü için state
  const settingsRef = useRef(null); // useRef ile menüye referans oluşturma

  // Sayfa dışına tıklanınca menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false); // Menüyü kapat
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
  };

  const removeCard = () => {
    alert("Card removed!"); // Remove card işlemi
  };

  return (
    <div className="my-work-container">
      <div className="my-work-header">
        <h2>My Work</h2>
        <div className="my-work-icons">
          <button className="icon-btn" title="Settings">
            <FaCog />
          </button>
          <button className="icon-btn" title="Full screen">
            <FaExpand />
          </button>
          <button className="icon-btn" onClick={toggleSettings} title="More settings">
            <FaEllipsisH />
          </button>
        </div>
      </div>

      {showSettings && (
        <div className="more-settings-menu" ref={settingsRef}>
          <button className="settings-item" onClick={removeCard}>
            <FaTrash className="trash-icon" /> Remove card
          </button>
        </div>
      )}

      {/* İçerik */}
      <div className="my-work-content">
        <div className="icon-placeholder">
          <span>📄</span> {/* İkon placeholder (örnek simge) */}
        </div>
        <p>Tasks and Reminders assigned to you will show here. <a href="#">Learn more</a></p>
        <button className="add-task-btn">+ Add task or reminder</button>
      </div>
    </div>
  );
};

export default MyWork;
