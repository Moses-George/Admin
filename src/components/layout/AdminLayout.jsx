import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { AccountCircle, Notifications, MessageSharp } from '@mui/icons-material';
import { Badge } from '@mui/material';

const AdminLayout = ({ children, header, icon }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className={`sm:mb-4 h-full w-full sm:pr-0 mt-32`}>
        {/* <ProfileSidebarIcons /> */}
        <Sidebar />
        <div className={`space-y-6 pr-20 pb-12`}>
          <div
            className={`flex justify-between py-5 px-5 w-[calc(100%-14rem)] left-[14rem] r-56 shadow-sm fixed top-0 bg-nav-bg backdrop-blur-md  transition ease-out delay-100 duration-500 z-[100]`}>
            <div className="flex items-center gap-x-2">
              {icon}
              <h1 className="text-slate-800 text-2xl font-semibold">{header}</h1>
            </div>
            {/* <HiMenuAlt2 className="text-3xl text-dark-gray sm:block hidden sm:ml-4" onClick={() => dispatch(toggleSidebar())} /> */}
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
              <div className="flex gap-2 w-fit">
                <div className="">
                  <p className="font-semibold text-slate-700">Moses George</p>
                  <p className="text-slate-500">Admin</p>
                </div>
                <AccountCircle className="text-slate-700" style={{ fontSize: '50px' }} />
              </div>
            </div>
          </div>
          <main className="w-[calc(100%-14rem)] overflow-none ml-[15rem]">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
