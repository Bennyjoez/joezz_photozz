import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { getUserBookings } from "../utils/getBookings";
import useTokenValidityCheck from "../utils/useCustomValidityCheck";
import handleErrors from "../utils/handleErrors";
import { clearBookings, saveBookings } from "../Features/bookings/bookingSlice";

function Profile() {
  const dispatch = useAppDispatch();
  // Validate userToken
  useTokenValidityCheck();

  const { name, email, contact, id } = useAppSelector((state) => state.user);
  let bookings = useAppSelector((state) => state.bookings);

  if (bookings.length > 0 && bookings[0].client._id !== id) {
    dispatch(clearBookings());
    bookings = [];
  }

  const [allBookings, setBookings] = useState(bookings || []);

  useEffect(() => {
    const fetchBookings = async () => {
      console.log("called")
      try {
        const fetchedBookings = (await getUserBookings(id)).data.data;
        setBookings(fetchedBookings);
        dispatch(saveBookings(fetchedBookings));
      } catch (error) {
        handleErrors(error);
      }
    };

    if (allBookings) {
      return;
    }

    if (id) {
      fetchBookings();
    }
  }, [id, dispatch, allBookings]);
  if (!name) {
    return (
      <div className="m-2">
        Please Login to access this page. 🔴<br />
        <a href="/login">Login Page</a>
      </div>
    );
  }

  return (
    <section id="profile-page">
      <div className="profile-tile">
        <p>Hello, {name.toUpperCase()}</p>
        <p>Email: {email}</p>
        <p>Contact: {contact}</p>
      </div>
      <div className="profile-tile">
        {
          allBookings && allBookings.map((e) => <div key={e._id}>{e.event}</div>)
        }
      </div>
    </section>
  );
}

export default Profile;
