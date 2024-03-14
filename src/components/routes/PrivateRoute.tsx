import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router';
import useTokenValidityCheck from '../../utils/useCustomValidityCheck';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  useTokenValidityCheck();
  const accessToken = localStorage.getItem('authToken');
  const location = useLocation();
  const fromLocation = (location.state)?.from;
  const prevLocation = fromLocation || { pathname: '/login' }

  if (accessToken) {
    return <>{children}</>;
  } else if (!accessToken) {
    return <Navigate to={prevLocation} state={{ from: location }} replace />;
  }
  return (
    <p>Something went wrong</p>
  )
}

export default PrivateRoute;
