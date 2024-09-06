// src/DateRangePicker.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { addDays } from 'date-fns';

const DateRangePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div>
      <h2>Select Date Range</h2>
      <DatePicker
        selected={startDate}
        onChange={handleChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        onClickOutside={() => setIsOpen(false)}
        open={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        placeholderText="Select a date range"
      />
    </div>
  );
};

export default DateRangePicker;
