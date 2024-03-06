import { useState } from 'react'
import { useAppDispatch } from '../app/hooks';
import { closePopup } from '../Features/modal/modalSlice';
import DateSelector from './DatePicker';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';
import handleErrors from '../utils/handleErrors';
import { addBooking } from '../Features/bookings/bookingSlice';

interface DetailsState {
  event: string;
  reservationDate: Date | null;
  shootLocation: string;
  message: string;
}

export default function BookingForm() {
  const dispatch = useAppDispatch();

  const [details, setDetails] = useState<DetailsState>({
    event: '',
    shootLocation: '',
    reservationDate: null,
    message: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstance.post('/bookings', details);

      // Booking saved
      setDetails({ event: '', shootLocation: '', message: '', reservationDate: null });
      dispatch(addBooking(data.booking))
      dispatch(closePopup());
      toast.success('Reserved a shoot date!');
    } catch (error: unknown) {
      // Handle non-successful response
      handleErrors(error);
    }
    
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
            <input type="text" name="event" id="event" placeholder='What is the occasion?' onChange={handleInput} value={details.event} />
            <label htmlFor="contact">Shoot Location</label>
            <input type="text" name="shootLocation" id="location" placeholder="Where's the shoot?" onChange={handleInput} value={details.shootLocation} />
            <label htmlFor="date">Select a date</label>
            <DateSelector setDetails={setDetails} value={details.reservationDate} />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" placeholder='What would you like us to know about your booking...' onChange={handleInput} value={details.message} ></textarea>

            <button type="submit" className='book-session-btn'>Submit Booking</button>
          </div>
        </form>
      </div>
      <span className="modal-close" role='button' onClick={onCloseButtonClick}>
          &#10005; {/* HTML code multiplication sign */}
        </span>
    </section>
  )
}
