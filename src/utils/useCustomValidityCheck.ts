import { useEffect } from 'react';
import { useAppDispatch } from '../app/hooks';
import { clearUser } from '../Features/user/userSlice';
import isTokenExpired from './checkToken';
import { clearBookings } from '../Features/bookings/bookingSlice';

const useTokenValidityCheck = () => {
  const userToken = localStorage.getItem('authToken') || '';
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenExpired = isTokenExpired(userToken);
    if (tokenExpired) {
      // Clear user details from the state if token is expired
      dispatch(clearUser());
      dispatch(clearBookings());
      localStorage.removeItem('authToken');
    }
  }, [userToken, dispatch]);

  return;
};

export default useTokenValidityCheck;
