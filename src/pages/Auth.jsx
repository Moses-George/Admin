import { useState, useEffect } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import InputField from '../components/ui/InputField';
import useForm from '../hooks/useForm';
import { Email, Lock, Key } from '@mui/icons-material';
import { Validator } from '../utils/validator';
import { toast } from 'react-toastify';
import useApiToast from '../hooks/useApiToast';
import useAdminFacade from '../facades/useAdminFacade';
import useAuth from '../hooks/useAuth';

const InitialData = {
  email: '',
  password: ''
};

const Auth = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const { logInAdmin, resetState, data, loading, error, success} = useAdminFacade();
  useApiToast(
    { data, loading, success, error },
    { loadingMsg: "Hold on, you're being logged in...", successMsg: data?.message }
  );
  const { accessToken } = useAuth();
  const navigate = useNavigate();
  // console.log(accessToken);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const validator = new Validator(formData);
    if (validator.whiteSpaces().length !== 0) {
      toast.error(validator.message, { autoClose: 4000 });
      return;
    }
    logInAdmin(formData);
  };

  useEffect(() => {
    if (success) {
      setFormData(InitialData);
      navigate('/dashboard', { replace: true });
      resetState();
    }
  }, [success]);

  useEffect(() => {
    if (accessToken) {
      navigate('/dashboard', { replace: true });
    }
  }, [accessToken]);

  return (
    <>
      {/* <Spinner /> */}
      <section className="mx-auto shadow-lg bg-white rounded-3xl grid lg:grid-cols-[4.5fr_5.5fr] lg:h-fit h-4/5 lg:h-full mt-12 w-[22rem] lg:w-4/5">
        <div className="lg:p-12 p-8 space-y-8 h-full">
          <div className="flex w-fit">
            <h1 className="text-4xl text-slate-700 tracking-wide">Login</h1>
            <Key className="self-end text-slate-200 rotate-45" sx={{ fontSize: '45px' }} />
          </div>
          <form onSubmit={handleSubmit} className="">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-600">
                Your email
              </label>
              <InputField
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email..."
                value={formData.email}
                onChange={handleChange}
                ringColorClass="focus:ring-lime-300"
                icon={<Email className="text-slate-400" />}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-600">
                Your password
              </label>
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password..."
                value={formData.password}
                onChange={handleChange}
                ringColorClass="focus:ring-lime-300"
                icon={<Lock className="text-slate-400" />}
              />
            </div>
            <div className="flex justify-start w-fit mb-6">
              <div className="flex items-center h-5 flex-1">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-4 focus:outline-none focus:ring-lime-300"
                  required
                />
              </div>
              <label htmlFor="remember" className="flex- ml-2 text-sm font-medium text-gray-900">
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-lime-600 hover:bg-lime-800 focus:ring-4 focus:outline-none focus:ring-lime-300 font-medium rounded-lg text-sm sm:w-auto px-8 py-2.5 text-center">
              Login
            </button>
          </form>
          <p className="mt-8 text-slate-700">
            Forgot password ?{' '}
            <Link to="/reset-password" className="underline">
              {' '}
              Reset
            </Link>{' '}
          </p>
        </div>

        <div className="w-full bg-lime-900 p-8 h-fit hidden lg:block rounded-tl-[5rem] rounded-bl-[5rem] rounded-3xl">
          <div className="py-4 text-center space-y-2">
            <h1 className="text-4xl text-white font-semibold tracking-widest">Welcome back!</h1>
            <p className="text-lg font-normal text-white">Login to access your admin account</p>
          </div>
          <img className="h-1/2 w-2/3 mx-auto" src="/images/admin.png" alt="man" />
        </div>
      </section>
    </>
  );
};

export default Auth;
