import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Email, Key } from '@mui/icons-material'; 
import InputField from '../components/ui/InputField';
import useForm from '../hooks/useForm';
import Validator from '../utils/validator';
import { toast } from 'react-toastify';
import useApiToast from '../hooks/useApiToast';
import { useResetUserPasswordMutation } from '../store/api/userApi';

const InitialData = {
  email: '',
  password: '',
  confirmPassword: ''
};

const ResetPassword = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [resetUserPassword, { isLoading, isError, error, isSuccess, data: user }] =
    useResetUserPasswordMutation();
  useApiToast({
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: "Sending your request...",
    successMsg: 'Successfully changed password!'
  });

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault()
    const validator = new Validator(formData);
    if (validator.whiteSpaces().length !== 0) {
      toast.error(validator.message, { autoClose: 4000 });
      return;
    }
    if (validator.confirmPassword()) {
      const { email, password } = formData;
      await resetUserPassword({ email, password });
    } else {
      toast.error(validator.message, { autoClose: 4000 });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(InitialData);
      navigate('/');
    }
  }, [isSuccess]);

  return (
    <section className="mx-auto shadow-md bg-white h-fit mt-12 w-[22rem] lg:w-[30rem]">
      <div className="lg:p-12 p-8 space-y-8">
        <h1 className="text-3xl text-slate-700 tracking-wide">Reset Password</h1>
        <form onSubmit={handleSubmit} className="">
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
              Email
            </label>
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Enter account email..."
              value={formData.email}
              onChange={handleChange}
              ringColorClass="focus:ring-lime-300"
              icon={<Email className="text-slate-400" />}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
              New password
            </label>
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder="Enter your new password.."
              value={formData.password}
              onChange={handleChange}
              ringColorClass="focus:ring-lime-300"
              icon={<Key className="text-slate-400" />}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
              Re-enter new password
            </label>
            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Re-enter new password..."
              value={formData.confirmPassword}
              onChange={handleChange}
              ringColorClass="focus:ring-lime-300"
              icon={<Key className="text-slate-400" />}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm sm:w-auto px-8 py-2.5 text-center">
            submit
          </button>
        </form>
        <p className="text-sm text-slate-600">
          You'll be redirected to the login page after changing your password.
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
