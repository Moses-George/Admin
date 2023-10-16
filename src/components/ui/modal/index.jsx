import { Email, Key, Person, Phone } from '@mui/icons-material';

const InputFieldsData = [
  {
    id: 'first_name',
    name: 'first_name',
    type: 'text',
    placeholder: "Enter member's first name",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'last_name',
    name: 'last_name',
    type: 'text',
    placeholder: "Enter member's last name ",
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: "Enter member's email",
    icon: <Email className="text-slate-400" />
  },
  {
    id: 'phone_number',
    name: 'phone_number',
    type: 'number',
    placeholder: "Enter member's phone number",
    icon: <Phone className="text-slate-400" />
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: "Enter member's password",
    icon: <Key className="text-slate-400" />
  }
];

export default InputFieldsData;
