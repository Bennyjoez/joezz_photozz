import { Booking } from '../Features/bookings/bookingSlice';

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
    </tr>
  )
}

export default BookingEntry