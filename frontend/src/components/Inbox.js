import React, { useState, useEffect, useRef } from 'react';
import './Inbox.css';

const Inbox = () => {
  const [activeTab, setActiveTab] = useState('Inbox');
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const [showCustomizeMenu, setShowCustomizeMenu] = useState(false);

  // Referanslar oluşturma
  const filterMenuRef = useRef(null);
  const customizeMenuRef = useRef(null);

  // Sayfa dışına tıklanıldığında menüleri kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Eğer tıklanan alan menü değilse menüyü kapat
      if (filterMenuRef.current && !filterMenuRef.current.contains(event.target)) {
        setShowFilterMenu(false);
      }
      if (customizeMenuRef.current && !customizeMenuRef.current.contains(event.target)) {
        setShowCustomizeMenu(false);
      }
    };

    // Mousedown olayını dinle
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Mousedown olayını temizle
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleFilterMenu = () => {
    setShowFilterMenu(!showFilterMenu);
  };

  const toggleCustomizeMenu = () => {
    setShowCustomizeMenu(!showCustomizeMenu);
  };

  return (
    <div className="inbox-container">
      <div className="tabs">
        {['Inbox', 'Important', 'Other', 'Snoozed', 'Cleared'].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="filter-bar">
        <input type="text" placeholder="Search..." />
        <div className="filter-buttons">
          <button className="filter-button" onClick={toggleFilterMenu}>
            Filter
          </button>
          <button className="clear-button">Clear all</button>
          <button className="customize-button" onClick={toggleCustomizeMenu}>
            Customize
          </button>
        </div>
      </div>

      <div className="inbox-content">
        {activeTab === 'Inbox' && (
          <div className="inbox-zero">
            <div className="envelope-icon">✉️</div>
            <h2>Inbox Zero</h2>
            <p>Congratulations! You've read all your important messages.</p>
            <button className="btn">Got it</button>
          </div>
        )}
        {/* Diğer tab içerikleri buraya eklenebilir */}
      </div>

      {/* Filter menu */}
      {showFilterMenu && (
        <div className="filter-menu" ref={filterMenuRef}>
          <ul>
            <li>Assigned to me</li>
            <li>Mentioning me</li>
            <li>Unread only</li>
          </ul>
        </div>
      )}

      {/* Customize menu */}
      {showCustomizeMenu && (
        <div className="customize-menu" ref={customizeMenuRef}>
          <h3>Customize Inbox</h3>
          <div className="customize-group">
            <label>
              <input type="checkbox" defaultChecked /> Group by date
            </label>
          </div>
          <div className="customize-group">
            <p>Display mode</p>
            <div className="display-mode-options">
              <button className="display-mode-btn active">Fullscreen</button>
              <button className="display-mode-btn">Inline</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
