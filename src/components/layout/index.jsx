import { Badge, Dashboard, People, Person, Settings, Work, Paid, PersonAdd } from '@mui/icons-material';

export const adminLinks = [
  {
    id: 'l1',
    name: 'Dashboard',
    href: '/dashboard',
    icon: <Dashboard  className="text-xl" />
  },
  {
    id: 'l11',
    name: 'New Admin',
    href: '/new-admin',
    icon: <PersonAdd  className="text-xl" />
  },
  {
    id: 'l12',
    name: 'Admins',
    href: '/admins',
    icon: <Badge  className="text-xl" />
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
  {
    id: 'l8',
    name: 'Settings',
    href: '/settings',
    icon: <Settings className="text-xl" />
  }
];
