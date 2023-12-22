import React from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';
import { Backdrop } from './Backdrop';
import InputField from '../InputField';
import InputFieldsData from '.';
import { motion } from 'framer-motion';
import { Add, Close, Update } from '@mui/icons-material';
import { dropIn } from '../../../utils/framer-motion/variants';
import useForm from '../../../hooks/useForm';
import { validator } from '../../../utils/validator';
import { toast } from 'react-toastify';

const InitialData = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  phone_number: ''
};

const MemberFormOverlay = ({ isNewMember, onClose }) => {
  const { formData, setFormData, handleChange } = useForm(InitialData);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validator.whiteSpaces()) {
      toast.error(`Please fill the field(s) ${validator.message}`, { autoClose: 4000 });
    }
    // if (isNewMember) {
    // }
    console.log(formData);
    // setFormData(InitialData);
  };
  return (
    <motion.div
      className="fixed border-gradient bg-white z-[9999] top-4 lg:top-8 p-8 space-y-6 w-[90%] lg:w-[35rem] flex flex-col items-center"
      variants={dropIn}
      initial="hidden"
      animate="visible"
      exit="exit">
      <div className="w-full flex">
        <h1 className="text-slate-800 text-2xl font-medium w-full">
          {isNewMember ? 'Add new member' : 'Edit member info'}
        </h1>
        <div className="px-2.5 py-2 rounded-full bg-lime-300 w-fit">
          <Close
            onClick={() => {
              onClose();
              !isNewMember && navigate(-1);
            }}
            className="text-white cursor-pointer"
          />
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full space-y-4 lg:px-6">
        {InputFieldsData.map((fieldData) => {
          const { id, name, type, placeholder, icon } = fieldData;
          return (
            <div className="w-full" key={id}>
              {isNewMember ? (
                <label
                  className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2.5"
                  htmlFor={name}>
                  {name.split('_').join(' ')}
                </label>
              ) : (
                name !== 'password' && (
                  <label
                    className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2.5"
                    htmlFor={name}>
                    {name.split('_').join(' ')}
                  </label>
                )
              )}
              {isNewMember ? (
                <InputField
                  id={id}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  ringColorClass="focus:ring-lime-300"
                  icon={icon}
                />
              ) : (
                name !== 'password' && (
                  <InputField
                    id={id}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    value={formData[name]}
                    onChange={handleChange}
                    ringColorClass="focus:ring-lime-300"
                    icon={icon}
                  />
                )
              )}
            </div>
          );
        })}
        <button className="p-3 bg-lime-500 text-white rounded-lg space-x-2 w-1/ mx-auto w-full">
          {isNewMember ? <Add className="" /> : <Update />}
          <span>{isNewMember ? 'Add member' : 'Update member'}</span>
        </button>
      </form>
    </motion.div>
  );
};

const MemberForm = ({ isNewMember, onClose }) => {
  const root = document.getElementById('modal-root');

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <>
          <Backdrop />
          <MemberFormOverlay isNewMember={isNewMember} onClose={onClose} />
        </>,
        root
      )}
    </React.Fragment>
  );
};

export default MemberForm;
