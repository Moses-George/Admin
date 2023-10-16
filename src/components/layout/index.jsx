import {
  Badge,
  Dashboard,
  People,
  Person,
  Settings,
  Work,
  Reviews,
  Message,
  CalendarMonth,
  Paid
} from '@mui/icons-material';

export const superAdminLinks = [
  {
    id: 'l1',
    name: 'Dashboard',
    href: '/dashboard',
    icon: <Dashboard size={20} className="" />
  },
  {
    id: 'l2',
    name: 'My Profile',
    href: '/my-profile',
    icon: <Person className="text-xl" />
  },
  {
    id: 'l3',
    name: 'Mentors',
    href: '/mentors',
    icon: <Badge className="text-xl" />
  },
  {
    id: 'l4',
    name: 'Mentees',
    href: '/mentees',
    icon: <People className="text-xl" />
  },
  {
    id: 'l5',
    name: 'Jobs Listing',
    href: '/jobs-listing',
    icon: <Work className="text-xl" />
  },
  {
    id: 'l6',
    name: 'Transactions',
    href: '/transactions',
    icon: <Paid className="text-xl" />
  },
  // {
  //   id: 'l6',
  //   name: 'Messages',
  //   href: '/messages',
  //   icon: <Message className="text-xl" />
  // },
  // {
  //   id: 'l7',
  //   name: 'Calender',
  //   href: '/calender',
  //   icon: <CalendarMonth className="text-xl" />
  // },
  {
    id: 'l8',
    name: 'Settings',
    href: '/settings',
    icon: <Settings className="text-xl" />
  }
];
