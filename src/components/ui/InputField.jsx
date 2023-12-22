import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const InputField = ({ id, name, placeholder, type, value, onChange, icon, ringColorClass }) => {
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);

  const togglePasswordVisibility = () => setPasswordIsVisible((prev) => !prev);

  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2 w-10 pointer-events-none">
        {icon}
      </div>
      <input
        type={type === 'password' ? (passwordIsVisible ? 'text' : 'password') : type}
        id={id}
        name={name}
        onChange={onChange}
        value={value}
        className={`bg-gray-50  border border-gray-300 text-gray-900 text-sm rounded-lg focus:bg-white focus:ring-4 focus:outline-none ${ringColorClass} block w-full pl-12 p-2.5`}
        placeholder={placeholder}
        required
      />
      {type === 'password' && (
        <div className="absolute inset-y-0 right-3 w-fit flex items-center pl-3">
          {passwordIsVisible ? (
            <VisibilityOff onClick={togglePasswordVisibility} className="text-slate-400" />
          ) : (
            <Visibility onClick={togglePasswordVisibility} className="text-slate-400" />
          )}
        </div>
      )}
    </div>
  );
};

export default InputField;
