import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { clearUser } from '../Features/user/userSlice';
import isTokenExpired from './checkToken';

const useTokenValidityCheck = () => {
  const { userToken } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tokenExpired = isTokenExpired(userToken);
    if (tokenExpired) {
      // Clear user details from the state if token is expired
      dispatch(clearUser());
    }
  }, [userToken, dispatch]);

  return;
};

export default useTokenValidityCheck;
