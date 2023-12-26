import { useEffect, useState } from 'react';
import { getToken } from '../utils/authHelpers';
import { Route } from 'react-router-dom';

const PrivateRoute = ({location, ...rest}) => {
  const token = getToken();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return <p className='text-5xl'>Loading...</p>
  }

  return (
    <Route {...rest}  />
  )
};
