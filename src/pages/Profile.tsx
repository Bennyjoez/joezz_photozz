import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import BookingEntry from "../components/bookingEntry";
import { RootState } from "../app/store";
import { clearBookings, fetchBookings } from "../Features/bookings/bookingSlice";
import { clearUser } from "../Features/user/userSlice";

function Profile() {
  const dispatch = useAppDispatch();
  const { name, email, contact, id } = useAppSelector((state) => state.user);
  const { bookings, status, error } = useAppSelector(
    (state: RootState) => state.bookings
  );

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    dispatch(clearUser());
    dispatch(clearBookings());
  }

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
      <div className="bg">
        <p>Hello, {name.toUpperCase()}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
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
            {
              bookings ? bookings.map((e) => <BookingEntry key={e._id} booking={e} />) : <tr><td>No Bookings</td></tr>
            }
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Profile;
