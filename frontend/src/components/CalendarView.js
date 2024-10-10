import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarView.css';

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-view">
      <h2>My Calendar</h2>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarView;
