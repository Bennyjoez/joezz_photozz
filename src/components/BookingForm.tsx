import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { closePopup } from '../Features/modal/modalSlice';
import DateSelector from './DatePicker';
import { toast } from 'react-toastify';

interface DetailsState {
  event: string;
  reservationDate: Date | null;
  shootLocation: string;
  message: string;
}

export default function BookingForm() {
  const dispatch = useAppDispatch();

  const { userToken } = useAppSelector((state) => state.user);

  const [details, setDetails] = useState<DetailsState>({
    event: '',
    shootLocation: '',
    reservationDate: null,
    message: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const url = await import.meta.env.VITE_JOEZ_PHOTOZZ_BACKEND + '/bookings';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${userToken}`
        },
        body: JSON.stringify(details),
      });
    
      if (response.ok) {
        // Booking saved
        setDetails({ event: '', shootLocation: '', message: '', reservationDate: null });
        dispatch(closePopup());
        toast.success('Reserved a shoot date!');
      } else {
        // Handle non-successful response
        const error = await response.json();
        toast.error(error.errors.message)
        if(error.errors.message.includes('date')) {
          const target = document.getElementById('date')
          if(target) {
            target.style.backgroundColor = '#ff9d9d';
            setTimeout(() => {
              target.style.backgroundColor = 'inherit';
            }, 6000)
          }
        }
      }
    } catch (error: unknown) {
      console.error('Error saving booking:', error);
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
      <span className="modal-close" onClick={onCloseButtonClick}>
          &#10005; {/* HTML code multiplication sign */}
        </span>
    </section>
  )
}
