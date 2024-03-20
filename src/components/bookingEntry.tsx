import { Booking } from '../components/Table';
import { cancelBooking } from '../utils/bookingsEndpoints';

interface BookingProps {
  booking: Booking
}

const BookingEntry: React.FC<BookingProps> = ({ booking }) => {
  const getDate = (date: Date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }

  return (
    <tr>
      <td>{booking._id}</td>
      <td>{booking.event}</td>
      <td>{getDate(booking.reservationDate)}</td>
      <td>{booking.shootLocation}</td>
      <td>{booking.message || "-"}</td>
      <td>
        <button className='cancel' onClick={() => cancelBooking(booking._id)}>Cancel</button>
      </td>
    </tr>
  )
}

export default BookingEntry