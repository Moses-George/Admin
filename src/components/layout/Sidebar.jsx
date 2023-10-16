import { AccountCircle, Logout, Menu, Close } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';
import { superAdminLinks } from '.';

const Sidebar = ({display, lg_display, zIndex, isVisible, setIsVisible }) => {
  // const pathname = usePathname();

  // const { data: session } = useSession();
  // console.log(session);

  const isSuperAdmin = true;

  return (
    <aside
      className={`h-screen bg-lime-950 pl-3 fixed top-0 w-[14rem] ${display} lg:${lg_display} ${zIndex}`}>
      <div>
        {!isSuperAdmin && <h1 className="text-2xl text-white mx-auto pb-5 px-2">Welcome</h1>}
        <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full `}>
          {/* <MdOutlineArrowBack className="text-center text-white text-3xl" onClick={toggleSidebar} /> */}
        </div>
      </div>
      <div className="flex flex-col space-y-4 bg-lime-900 text-white py-4 rounded-bl-full">
        <div className="flex items-center justify-between gap-2 px-3">
          <h1 className="text-3xl tracking-widest">Admin</h1>
          {isVisible ? <Close onClick={() => setIsVisible(false)} /> : <Menu />}
        </div>
        <div className="p-1 rounded-full border-4 w-fit border-white self-center">
          <AccountCircle className="text-7xl" style={{ fontSize: '60px' }} />
        </div>
        <p className="text-md font-semibold text-center">Moses George</p>
      </div>

      <div className="flex flex-col space-y-3 text-white mt-6">
        {superAdminLinks.map((link) => (
          <NavLink
            className={`${({ isActive }) =>
              isActive ? 'active' : 'inactive'} flex items-center gap-2 pl-4`}
            key={link.id}
            to={link.href}>
            {link.icon}
            <span className="text-md flex-4">{link.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="py-12 sm:py-8 px-2">
        {/* <SiCodechef className="text-8xl text-white mx-auto" /> */}
      </div>
      <div className="pb-5">
        <button className="flex items-center w-fit px-2 space-x-2 text-white">
          <Logout className="text-xl" />
          <span className="text-md">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
