import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { AccountCircle } from '@mui/icons-material';

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* <Sidebar /> */}
      <div className={`sm:mb-4 h-full w-full sm:pr-0 mt-32`}>
        {/* <ProfileSidebarIcons /> */}
        <Sidebar />
        <div className={`space-y-6 w-[calc(100%-14rem)] pb-12`}>
          <div
            className={`flex justify-between py-5 w-full w-[calc(100%-14rem)] left-[14rem] shadow-sm fixed top-0 bg-nav-bg backdrop-blur-md  transition ease-out delay-100 duration-500 z-[100]`}>
            <div className="flex items-center gap-x-2 sm:hidden">
              {/* {icon} */}
              {/* <h1 className="text-dark-gray text-2xl font-semibold">{header}</h1> */}
            </div>
            {/* <HiMenuAlt2 className="text-3xl text-dark-gray sm:block hidden sm:ml-4" onClick={() => dispatch(toggleSidebar())} /> */}
            <div className="justify-self-end flex items-end gap-x-4 sm:gap-x-2 sm:mr-4">
              <div className="p-2 rounded-lg bg-medium-peach">
                <Link href="/search">{/* <FaSearch className="text-xl text-white" /> */}</Link>
              </div>
              <Link href="/cart">
                <div className="relative self-end border-dark-peach rounded-lg py-[.2rem] px-[.3rem] border-2 mr-3">
                  <AccountCircle />
                </div>
              </Link>
            </div>
          </div>
          <main className="w-[calc(100%-14rem)] ml-[15rem] pr-[1rem]">{children}</main>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
