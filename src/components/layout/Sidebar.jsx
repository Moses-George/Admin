import { AccountCircle } from '@mui/icons-material';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  // const pathname = usePathname();

  // const { data: session } = useSession();
  // console.log(session);

  const isAdmin = true;

  const adminLinks = [
    {
      id: 'l1',
      name: 'Dashboard',
      href: '/dashboard'
      // icon: <AiFillDashboard className="text-xl" />
    },
    {
      id: 'l2',
      name: 'Meals',
      href: '/admin/meals'
      // icon: <GiHotMeal className="text-xl" />
    },
    {
      id: 'l3',
      name: 'New Meal',
      href: '/admin/new-meal'
      // icon: <MdAddCircle className="text-xl" />
    },
    {
      id: 'l4',
      name: 'Orders',
      href: '/admin/orders'
      // icon: <FaFirstOrder className="text-xl" />
    },
    {
      id: 'l5',
      name: 'Customers',
      href: '/admin/customers'
      // icon: <FaUsers className="text-xl" />
    },
    {
      id: 'l6',
      name: 'Analytics',
      href: '/admin/analytics'
      // icon: <IoAnalytics className="text-xl" />
    },
    {
      id: 'l7',
      name: 'Hot Offers',
      href: '/admin/hot-offers'
      // icon: <MdLocalOffer className="text-xl" />
    },
    {
      id: 'l8',
      name: 'Settings',
      href: '/admin/settings'
      // icon: <IoSettings className="text-xl" />
    }
  ];

  return (
    <aside className={`h-screen profile-sidebar bg-lime-700 fixed top-0 md:hidde  w-[14rem]`}>
      <div>
        {!isAdmin && <h1 className="text-2xl text-white mx-auto pb-5 px-2">Welcome</h1>}
        <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full bg-dark-peach`}>
          {/* <MdOutlineArrowBack className="text-center text-white text-3xl" onClick={toggleSidebar} /> */}
        </div>
      </div>
      <div className="flex flex-col space-y-2 bg-lime-500 text-white text-center py-4 px-4 rounded-bl-full">
        <h1 className="text-3xl tracking-widest">Admin</h1>
        <div className="p-1 rounded-full border-4 w-fit border-white self-center">
          <AccountCircle className='text-7xl' style={{fontSize:"60px"}} />
        </div>
        <p className='text-md font-semibold'>Moses George</p>
      </div>
      {!isAdmin && (
        <div className="grid gap-y-1 sm:gap-y-2 pl-2">
          <Link
            className="flex items-center space-x-2 bg-whit py-2 px-3 w-full h-full font-semibold shape"
            href="/user/favourites">
            {/* <MdFavorite className="text-xl text-dark-peach" /> */}
            <span className="text-md text-dark-peach">Favourites</span>
          </Link>
          <Link
            className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl"
            href="/">
            {/* <FaFirstOrderAlt className="text-xl text-white" /> */}
            <span className="text-md text-white">My Orders</span>
          </Link>
          <Link
            className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl"
            href="/">
            {/* <MdNotifications className="text-xl text-white" /> */}
            <span className="text-md text-white">Notifications</span>
          </Link>
          <Link
            className="flex items-center space-x-2 py-2 px-2 rounded-tr-xl rounded-br-xl"
            href="/">
            {/* <MdSettings className="text-xl text-white" /> */}
            <span className="text-md text-white">Settings</span>
          </Link>
        </div>
      )}

      <div className="flex flex-col pl-3 space-y-3 text-white mt-6">
        {adminLinks.map((link) => (
          <NavLink
            className={`${({ isActive }) => (!isActive ? 'inactive' : 'active')} pl-4`}
            key={link.id}
            // className={`flex items-center space-x-2  py-2 px-3 font-semibold ${
            //   (link.href !== '/admin' ? pathname?.includes(link.href) : pathname === link.href)
            //     ? 'active'
            //     : 'inactive'
            // }`}
            to={link.href}>
            {/* {link.icon} */}
            <span className="text-md">{link.name}</span>
          </NavLink>
        ))}
      </div>
      <div className="py-12 sm:py-8 px-2">
        {/* <SiCodechef className="text-8xl text-white mx-auto" /> */}
      </div>
      <div className="pb-5">
        <button className="flex items-center px-2 space-x-2 text-white">
          {/* <BiLogOut className="text-xl" /> */}
          <span className="text-md">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
