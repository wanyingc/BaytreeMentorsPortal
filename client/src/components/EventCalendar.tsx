import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/EventCalendar.css';

const EventCalendar = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-100">
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default EventCalendar;