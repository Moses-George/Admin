import {
  Badge,
  Dashboard,
  People,
  Person,
  Settings,
  Work,
  Reviews,
  Message,
  CalendarMonth
} from '@mui/icons-material';

export const superAdminLinks = [
  {
    id: 'l1',
    name: 'Dashboard',
    href: '/dashboard',
    icon: <Dashboard className="text-xl" />
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
    name: 'Messages',
    href: '/messages',
    icon: <Message className="text-xl" />
  },
  {
    id: 'l7',
    name: 'Calender',
    href: '/calender',
    icon: <CalendarMonth className="text-xl" />
  },
  {
    id: 'l8',
    name: 'Settings',
    href: '/settings',
    icon: <Settings className="text-xl" />
  }
];

export const adminLinks = [
  {
    id: 'l1',
    name: 'Dashboard',
    href: '/dashboard',
    icon: <Dashboard className="text-xl" />
  },
  {
    id: 'l2',
    name: 'My Profile',
    href: '/my-profile',
    icon: <Person className="text-xl" />
  },
  {
    id: 'l3',
    name: 'My mentees',
    href: '/my-mentees',
    icon: <People className="text-xl" />
  },
  {
    id: 'l4',
    name: 'Jobs Listing',
    href: '/jobs-listing',
    icon: <Work className="text-xl" />
  },
  {
    id: 'l5',
    name: 'My Reviews',
    href: '/my-reviews',
    icon: <Reviews className="text-xl" />
  },
  {
    id: 'l6',
    name: 'Messages',
    href: '/messages',
    icon: <Message className="text-xl" />
  },
  {
    id: 'l7',
    name: 'Calender',
    href: '/calender',
    icon: <CalendarMonth className="text-xl" />
  },
  {
    id: 'l8',
    name: 'Settings',
    href: '/settings',
    icon: <Settings className="text-xl" />
  }
];
