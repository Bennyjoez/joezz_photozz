import BookingEntry from "./bookingEntry";
import { Booking } from "../Features/bookings/bookingSlice";

interface TableProps {
  bookings: Booking[]
}

export function Table({ bookings }: TableProps) {
  return (
    <div className="bookings bg">
      <table className="profile-tile">
        <thead>
          <tr>
            <th>ID</th>
            <th>EVENT</th>
            <th>DATE</th>
            <th>SHOOT LOCATION</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {bookings ? bookings.map(e => <BookingEntry key={e._id} booking={e} />) : <tr><td>No Bookings</td></tr>}
        </tbody>
      </table>
    </div>
  )
}