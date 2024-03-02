import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectorProps {
  setDetails: React.Dispatch<React.SetStateAction<DetailsState>>;
  value: Date | null
}

interface DetailsState {
  event: string;
  shootLocation: string,
  message: string,
  reservationDate: Date | null;
}

const DateSelector: React.FC<DateSelectorProps> = ({ setDetails, value }) => {

  const handleChange = (date: Date | null) => {
    setDetails((prev) => ({ ...prev, reservationDate: date }));
  };

  const today = new Date();

  return (
    <div id='date'>
      <DatePicker
        selected={value}
        onChange={handleChange}
        dateFormat="MM/dd/yyyy"
        isClearable
        placeholderText="Select a date"
        minDate={today}
        name='date'
      />
      {value && <p>Selected date: {value.toLocaleDateString()}</p>}
    </div>
  );
};

export default DateSelector;
