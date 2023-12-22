import { AccountCircle, Logout, Menu, Close } from '@mui/icons-material';
import {  NavLink } from 'react-router-dom';
import { superAdminLinks } from '.';
import { framerDelaySlide, framerIcon, framerSidebarPanel } from '../../utils/framer-motion/variants';
import { motion } from 'framer-motion';

const Sidebar = ({ display, lg_display, zIndex, isVisible, setIsVisible }) => {
  return (
    <aside
      className={`h-screen bg-lime-950 pl-3 fixed top-0 w-[14rem] ${display} lg:${lg_display} ${zIndex}`}>
      <div>
        <div className={`absolute top-20 -right-7 w-14 h-14 p-3 rounded-full `}>
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
        {superAdminLinks.map((link, index) => ( 
          <NavLink
            className={`${({ isActive }) =>
              isActive ? 'active' : 'inactive'} flex items-center gap-2 pl-4`}
            key={link.id}
            to={link.href}>
            <motion.div {...framerIcon} className=''> {link.icon} </motion.div>
            <motion.span {...framerDelaySlide(index)} className="text-md flex-4">{link.name}</motion.span>
          </NavLink>
        ))}
      </div>
      <div className="py-12 sm:py-8 px-2">
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
