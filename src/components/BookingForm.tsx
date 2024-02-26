import { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { closePopup } from '../Features/modal/modalSlice';
import DateSelector from './DatePicker';

export default function BookingForm() {
  const dispatch = useAppDispatch();

  const [details, setDetails] = useState({
    event: '',
    location: '',
    message: '',
    date: ''
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log( details.event, details.location, details.message);
  };

  const handleInput = (e: { target: { name: string; value: string; }; }) => {
    const target = e.target.name;
    setDetails((prev) => ({ ...prev, [target]: e.target.value }));
  };

  const onCloseButtonClick = () => {
    dispatch(closePopup());
  }


  return (
    <section className="popup-form">
      <div className='bookings-form-container'>
        <form onSubmit={handleSubmit} className='signup-form'>
          <div className='flex-form'>
            <label htmlFor="event">Event</label>
            <input type="text" name="event" id="event" placeholder='What is the occasion?' onChange={handleInput} />
            <label htmlFor="contact">Shoot Location</label>
            <input type="text" name="location" id="location" placeholder="Where's the shoot?" onChange={handleInput} />
            <label htmlFor="date">Select a date</label>
            {/* <input type="text" name="date" id="date" placeholder="When is the shoot?" onChange={handleInput} /> */}
            <DateSelector />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='What would you like us to know about your booking...' onChange={handleInput}></textarea>

            <button type="submit" className='book-session-btn'>Submit Booking</button>
          </div>
        </form>
      </div>
      <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code multiplication sign */}
        </span>
    </section>
  )
}
