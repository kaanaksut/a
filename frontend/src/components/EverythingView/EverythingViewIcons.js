// src/components/EverythingViewIcons.js
import React from 'react';
import { FaList, FaThLarge, FaCalendarAlt } from 'react-icons/fa';

export const EverythingViewIcons = () => {
  return (
    <div className="icons">
      <FaList className="icon" title="List View" />
      <FaThLarge className="icon" title="Board View" />
      <FaCalendarAlt className="icon" title="Calendar View" />
    </div>
  );
};
