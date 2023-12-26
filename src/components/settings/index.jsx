import { Email, Key, Person, Phone, SchoolSharp } from '@mui/icons-material';

//  Input fields data for memberform

const InputFieldsData = [
  {
    id: 'firstName',
    name: 'firstName',
    type: 'text',
    placeholder: "Enter new first name",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    placeholder: "Enter new last name ",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: "Enter new email",
    icon: <Email className="text-slate-400" />
  },
  {
    id: 'telNumber',
    name: 'telNumber',
    type: 'number',
    placeholder: "Enter new phone number",
    icon: <Phone className="text-slate-400" />
  },
  {
    id: 'education',
    name: 'education',
    type: 'text',
    placeholder: "Enter new level of education",
    icon: <SchoolSharp className="text-slate-400" />
  }
];

export default InputFieldsData;
