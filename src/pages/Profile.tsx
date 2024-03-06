import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import useTokenValidityCheck from "../utils/useCustomValidityCheck";
// import { saveBookings } from "../Features/bookings/bookingSlice";
import BookingEntry from "../components/bookingEntry";
import { RootState } from "../app/store";
import { fetchBookings } from "../Features/bookings/bookingSlice";

function Profile() {
  const dispatch = useAppDispatch();
  // Validate userToken
  useTokenValidityCheck();

  const { name, email, contact, id } = useAppSelector((state) => state.user);
  const { bookings, status, error } = useAppSelector(
    (state: RootState) => state.bookings
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBookings(id));
    }
  }, [id, status, dispatch]);

  // login to get profile
  if (!name) {
    return (
      <div className="m-2">
        Please Login to access this page. 🔴<br />
        <a href="/login">Login Page</a>
      </div>
    );
  }

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }


  return (
    <section id="profile-page">
      <div className="profile-tile">
        <p>Hello, {name.toUpperCase()}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </div>
      <table className="profile-tile bookings">
        <thead>
          <tr>
            <th>ID</th>
            <th>EVENT</th>
            <th>DATE</th>
            <th>SHOOT LOCATION</th>
          </tr>
        </thead>
        <tbody>
          {
            bookings && bookings.map((e) => <BookingEntry key={e._id} booking={e} />)
          }
        </tbody>
      </table>
    </section>
  );
}

export default Profile;
