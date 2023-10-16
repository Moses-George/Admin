import { AttachMoney, LocationOn, Person } from '@mui/icons-material';

export const InputFieldsData = [
  {
    id: 'company',
    name: 'company',
    type: 'text',
    placeholder: "Enter company's name",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'position',
    name: 'position',
    type: 'text',
    placeholder: "Enter job's postion",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'location',
    name: 'location',
    type: 'text',
    placeholder: "Enter job's Location",
    icon: <LocationOn className="text-slate-400" />
  },
  {
    id: 'salary',
    name: 'salary',
    type: 'text',
    placeholder: "Enter Job's salary",
    icon: <AttachMoney className="text-slate-400" />
  }
];
