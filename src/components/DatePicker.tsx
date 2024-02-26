import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectorProps {
  setDetails: React.Dispatch<React.SetStateAction<DetailsState>>;
}

interface DetailsState {
  event: string;
  location: string,
  message: string,
  date: Date | null;
}

const DateSelector: React.FC<DateSelectorProps> = ({ setDetails }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
    setDetails((prev) => ({ ...prev, date: date }));
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
