import { ProfileHero } from './../components/profile/ProfileHero';
import { Table } from "../components/Table";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { clearUser } from "../Features/user/userSlice";
import { useQuery } from "@tanstack/react-query";
import { getUserBookings } from "../utils/bookingsEndpoints";
import ErrorContainer from '../components/error/ErrorContainer';
import Loading from '../components/loading/Loading';

function Profile() {
  const dispatch = useAppDispatch();
  const { name, email, contact, id } = useAppSelector((state) => state.user);
  const userId = id;

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["bookings", userId],
    queryFn: () => getUserBookings(userId),
  });

  const handleLogout = () => {
    const logoutBtn = document.getElementById('logout') as HTMLInputElement;
    if (logoutBtn) {
      logoutBtn.disabled = true;
      localStorage.removeItem("authToken");
      dispatch(clearUser());
      logoutBtn.disabled = false;
    }
  };

  // login to get profile
  if (!name) {
    return (
      <ErrorContainer>
        <div className="m-2">
          <b>Please Login to access this page. 🔴</b>
          <br />
          <a href="/login">Login Page</a>
        </div>
      </ErrorContainer>
    );
  }

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <div>{error.message}</div>;
  }
  const bookings = data.data.data;

  return (
    <section id="profile-page">
      <ProfileHero name={name} email={email} contact={contact} handleLogout={handleLogout}  />
      <Table bookings={bookings} />
    </section>
  );
}

export default Profile;
