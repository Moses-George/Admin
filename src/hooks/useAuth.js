import { useEffect, useMemo, useState } from 'react';

const useAuth = () => {
  const localStorageItem = localStorage.getItem('accessToken');
  const [accessToken, setAccessToken] = useState(localStorageItem); 

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  }, [accessToken]);

  return useMemo(() => {
    return { accessToken, setAccessToken };
  }, [accessToken]);
};

export default useAuth;
