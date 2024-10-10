import React, { useState, useRef, useEffect } from 'react';
import './Agenda.css';
import { FaCalendarAlt, FaEllipsisH, FaExpandArrowsAlt, FaList } from 'react-icons/fa';

const Agenda = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showMoreSettings, setShowMoreSettings] = useState(false);

  // Ref oluşturma
  const moreSettingsRef = useRef(null);

  // Sayfa dışına tıklanıldığında menüyü kapatma
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (moreSettingsRef.current && !moreSettingsRef.current.contains(event.target)) {
        setShowMoreSettings(false); // Sayfa dışına tıklanınca menüyü kapat
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handlePrevDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
  };

  const handleNextDay = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));
  };

  const toggleMoreSettings = () => {
    setShowMoreSettings(!showMoreSettings);
  };

  return (
    <div className="agenda-container">
      <div className="agenda-header">
        <h2>Agenda</h2>
        <div className="agenda-controls">
          <button className="icon-btn" title="Open calendar in profile">
            <FaList />
          </button>
          <button className="icon-btn" title="View in full screen">
            <FaExpandArrowsAlt />
          </button>
          <button className="icon-btn" title="More settings" onClick={toggleMoreSettings}>
            <FaEllipsisH />
          </button>
        </div>

        {/* More settings dropdown */}
        {showMoreSettings && (
          <div className="more-settings-dropdown" ref={moreSettingsRef}>
            <button>Agenda</button>
            <button>Calendar</button>
            <button>Remove card</button>
          </div>
        )}
      </div>
      
      <div className="agenda-navigation">
        <button onClick={handlePrevDay}>&lt;</button>
        <span>{currentDate.toDateString()}</span>
        <button onClick={handleNextDay}>&gt;</button>
      </div>
      
      <div className="agenda-content">
        {/* Eğer takvim öğeleri yoksa bu yazı görünecek */}
        <p>Agenda items from your calendar will show here.</p>
        <button className="btn">+ Add calendar integrations</button>
      </div>
    </div>
  );
};

export default Agenda;
