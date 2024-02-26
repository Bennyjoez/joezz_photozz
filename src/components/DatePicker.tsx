import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const today = new Date();

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="MM/dd/yyyy"
        isClearable
        placeholderText="Select a date"
        minDate={today}
      />
      {selectedDate && <p>Selected date: {selectedDate.toLocaleDateString()}</p>}
    </div>
  );
};

export default DateSelector;
