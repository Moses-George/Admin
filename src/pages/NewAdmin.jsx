import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Person, Email, Key, PersonAdd, PersonAddAlt } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import useForm from '../hooks/useForm';
import InputField from '../components/ui/InputField';
import Validator from '../utils/validator';
import useApiToast from '../hooks/useApiToast';
import { toast } from 'react-toastify';
import { useSignupUserMutation } from '../store/api/authApi';
import { getToken } from '../utils/authHelpers';
import { useGetUserQuery } from '../store/api/userApi';

const InitialData = {
  firstName: '',
  lastName: '',
  email: '',
  password: ''
};

const InputFieldsData = [
  {
    id: 'firstName',
    name: 'firstName',
    type: 'text',
    placeholder: 'Enter admin first name',
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'lastName',
    name: 'lastName',
    type: 'text',
    placeholder: 'Enter admin last name ',
    icon: <Person className="text-slate-400" />
  },
  {
    id: 'email',
    name: 'email',
    type: 'email',
    placeholder: 'Enter admin email',
    icon: <Email className="text-slate-400" />
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    placeholder: 'Enter admin password',
    icon: <Key className="text-slate-400" />
  }
];

const NewAdmin = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [signupUser, { isLoading, isError, error, isSuccess, data: user }] =
    useSignupUserMutation();
  useApiToast({
    user,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Creating new admin...',
    successMsg: 'Successfully added new admin!'
  });
  const token = getToken();
  const navigate = useNavigate();
  const { data } = useGetUserQuery(token);
  const currentUser = user?.data[0];

  const RegisterUser = async (event) => {
    event.preventDefault();
    if (!currentUser?.verified) {
      toast.warning("You're not authorized to perform this action!", { autoClose: 3000 });
      return;
    }
    const validator = new Validator(formData);
    if (validator.whiteSpaces().length !== 0) {
      toast.error(validator.message, { autoClose: 4000 });
      return;
    }
    await signupUser(formData);
  };

  console.log(user);

  useEffect(() => {
    if (isSuccess) {
      setFormData(InitialData);
      navigate('/admins');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  return (
    <AdminLayout header="New Admin" icon={<PersonAdd sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full">
        <section className="bg-white rounded-md shadow-md p-12 space-y-16 glossy">
          <h1 className="text-3xl text-slate-800 font-medium">Add New Admin</h1>
          <form className="space-y-6" onSubmit={RegisterUser}>
            <div className=" flex flex-col lg:flex-row lg:flex-wrap gap-y-6 gap-x-12">
              {InputFieldsData.map((fieldData) => {
                const { id, name, type, placeholder, icon } = fieldData;
                return (
                  <div className="w-full lg:basis-1/3 lg:flex-grow" key={id}>
                    <label
                      className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
                      htmlFor={name}>
                      {name.split('_').join(' ')}
                    </label>
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
                  </div>
                );
              })}
            </div>
            <button className="py-2 px-4 flex items-center gap-2 text-white rounded-md bg-lime-600 hover:opacity-70">
              <PersonAddAlt />
              <span>Add Admin</span>
            </button>
          </form>
        </section>
      </div>
    </AdminLayout>
  );
};

export default NewAdmin;
