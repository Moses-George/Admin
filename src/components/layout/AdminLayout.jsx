import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AccountCircle, Notifications, MessageSharp, Menu } from '@mui/icons-material';
import { Badge } from '@mui/material';
import Sidebar from './Sidebar';

const AdminLayout = ({ children, header, icon }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {isVisible && (
        <Sidebar
          display="block"
          lg_display="hidden"
          zIndex="z-[999]"
          isVisible={isVisible}
          setIsVisible={setIsVisible}
        />
      )}
      <div className={`h-full w-full mt-32`}>
        <Sidebar display="hidden" lg_display="block" />
        <div className={`space-y-6 px-6 lg:pr-20 pb-12`}>
          <div
            className={`flex justify-between py-5 px-5 w-full lg:w-[calc(100%-14rem)] lg:left-[14rem] left-0 lg:r-56 shadow-sm fixed top-0 bg-nav-bg backdrop-blur-md  transition ease-out delay-100 duration-500 z-[100]`}>
            <div className="items-center gap-x-2 hidden lg:flex">
              {icon}
              <h1 className="text-slate-800 text-2xl font-semibold">{header}</h1>
            </div>
            <div className="flex items-center gap-x-2 lg:hidden">
              <Menu
                onClick={() => setIsVisible(true)}
                className="text-dark-gray"
                sx={{ fontSize: '30px' }}
              />
              <h1 className="text-slate-800 lg:text-2xl text-xl font-semibold">{header}</h1>
            </div>
            <div className="flex items-center justify-end gap-6">
              <Link className="text-end w-fit p-2.5 bg-amber-100 rounded-full">
                <Badge
                  badgeContent={4}
                  sx={{ '& .MuiBadge-badge': { color: '#fff', backgroundColor: '#d97706' } }}>
                  <Notifications color="action" />
                </Badge>
              </Link>
              <Link className="text-end w-fit p-2.5 bg-amber-100 rounded-full">
                <Badge
                  badgeContent={4}
                  sx={{ '& .MuiBadge-badge': { color: '#fff', backgroundColor: '#d97706' } }}>
                  <MessageSharp color="action" />
                </Badge>
              </Link>
              <div className="flex gap-2 w-fit hidden">
                <div className="">
                  <p className="font-semibold text-slate-700">Moses George</p>
                  <p className="text-slate-500">Admin</p>
                </div>
                <AccountCircle className="text-slate-700" style={{ fontSize: '50px' }} />
              </div>
            </div>
          </div>
          <main className="lg:w-[calc(100%-14rem)] w-ful overflow-none lg:ml-[14.5rem]">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
