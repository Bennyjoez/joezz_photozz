import { Table } from '../components/Table';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
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
      <Table   bookings={bookings}  />
    </section>
  );
}

export default Profile;
