import { AccountCircle, Logout, Menu, Close } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { adminLinks } from '.';
import { useEffect } from 'react';
import { useGetUserQuery } from '../../store/api/userApi';
import { getLoginTime, getToken, removeLoginTime, removeToken } from '../../utils/authHelpers';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Sidebar = ({ display, lg_display, zIndex, isVisible, setIsVisible, user, isLoading }) => {
  const navigate = useNavigate();
  const token = getToken();
  const admin = user?.data[0];

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  const logout = () => {
    navigate('/', { replace: true });
    removeToken();
  };

  useEffect(() => {
    const loginTime = getLoginTime();
    if (loginTime) {
      const twentyFourHours = 24 * 60 * 60 * 1000;
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(loginTime, 10);

      if (elapsedTime >= twentyFourHours) {
        logout();
        removeLoginTime();
      } else {
        const interval = setInterval(() => {
          const currentTime = new Date().getTime();
          const elapsedTime = currentTime - parseInt(loginTime, 10);
          if (elapsedTime >= twentyFourHours) {
            logout();
            removeLoginTime();
            clearInterval(interval);
          }
        }, 60000);
      }
    }
  }, []);

  return (
    <aside
      className={`h-screen bg-lime-950 pl-3 fixed top-0 w-[14rem] ${display} lg:${lg_display} ${zIndex}`}>
      <div>
        <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full `}></div>
      </div>
      <div className="flex flex-col space-y-4 bg-lime-900 text-white py-4 rounded-bl-full">
        <div className="flex items-center justify-between gap-2 px-3">
          <h1 className="text-3xl tracking-widest">Admin</h1>
          {isVisible ? (
            <Close onClick={() => setIsVisible(false)} />
          ) : (
            <Menu className="lg:hidden" />
          )}
        </div>
        <div className="p-1 rounded-full border-4 w-fit border-lime-200 self-center">
          {isLoading || !user ? (
            <div className="animate-pulse rounded-full h-24 w-24 bg-lime-100 shadow-md"></div>
          ) : admin?.imageUrl ? (
            <img src={admin?.imageUrl} alt="" className="rounded-full h-24 w-24" />
          ) : (
            <AccountCircle className="" style={{ fontSize: '80px' }} />
          )}
        </div>
        {isLoading || !user ? (
          <p className="animate-pulse bg-lime-100 w-28 h-2 mx-auto rounded-xl"></p>
        ) : (
          <p className="text-md font-semibold text-center uppercae">
            {capitalizeFirstLetter(admin?.firstName)} {capitalizeFirstLetter(admin?.lastName)}
          </p>
        )}
      </div>

      <div className="flex flex-col space-y-3 text-white mt-2">
        {adminLinks.map((link, index) => (
          <NavLink
            className={`${({ isActive }) =>
              isActive ? 'active' : 'inactive'} flex items-center gap-2 pl-4`}
            key={link.id}
            to={link.href}>
            <div className=""> {link.icon} </div>
            <span className="text-md flex-4">{link.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="py-4  px-2"></div>
      <div className="pb-5">
        <button className="flex items-center w-fit px-2 space-x-2 text-white" onClick={logout}>
          <Logout className="text-xl" />
          <span className="text-md">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
