import BookingEntry from "./bookingEntry";

interface Booking {
  client: { _id: string; name: string };
  event: string;
  message: string;
  reservationDate: Date;
  shootLocation: string;
  _id: string;
}

interface TableProps {
  bookings: Booking[]
}

export function Table({ bookings }: TableProps) {
  if (bookings.length < 1) {
    return (<div className="bookings bg">You have no bookings!</div>)
  }

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