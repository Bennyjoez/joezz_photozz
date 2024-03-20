import { Booking } from '../components/Table';
import { deleteBooking } from '../utils/bookingsEndpoints';
import { useQueryClient } from '@tanstack/react-query';

interface BookingProps {
  booking: Booking
}

const BookingEntry: React.FC<BookingProps> = ({ booking }) => {
  const getDate = (date: Date) => {
    const newDate = new Date(date);
    return newDate.toDateString();
  }

  const queryClient = useQueryClient()

  const cancelBooking = async () => {
    try {
      // delete a booking
      deleteBooking(booking._id);
      // invalidate bookings to force a refetch
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <tr>
      <td>{booking._id}</td>
      <td>{booking.event}</td>
      <td>{getDate(booking.reservationDate)}</td>
      <td>{booking.shootLocation}</td>
      <td>{booking.message || "-"}</td>
      <td>
        <button className='cancel' onClick={cancelBooking}>Cancel</button>
      </td>
    </tr>
  )
}

export default BookingEntry