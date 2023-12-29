export const getToken = () => {
  return localStorage.getItem('token');
};

export const removeToken = () => {
  return localStorage.removeItem('token');
};

export const setToken = (token) => {
  return localStorage.setItem('token', token);
};

export const getLoginTime = () => {
  return localStorage.getItem('loginTime');
};

export const removeLoginTime = () => {
  return localStorage.removeItem('loginTime');
};

export const setLoginTime = () => {
  const loginTime = new Date().getTime();
  return localStorage.setItem('loginTime', loginTime);
};
