import React, { useState, useRef, useEffect } from 'react';
import './TaskList.css'; // CSS dosyası

const TaskList = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Menünün açık olup olmadığını kontrol eden state
  const dropdownRef = useRef(null); // Menüyü referans alıyoruz

  // Menüyü açma/kapatma fonksiyonu
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Açık değilse aç, açıksa kapa
  };

  // Boş bir yere tıklandığında menüyü kapatma işlevi
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Menünün dışına tıklanırsa menüyü kapat
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      
      {/* Task Options butonu */}
      <button className="list-options-btn" onClick={toggleDropdown}>
        List Options
      </button>

      {/* Dropdown menü */}
      {isDropdownOpen && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <button>Rename</button>
          <button>Copy link to view</button>
          <button>Add to favorites</button>
          <button>Customize view</button>
          <button>Pin view</button>
          <button>Private view</button>
        </div>
      )}

      <p>No tasks available.</p>
    </div>
  );
};

export default TaskList;
