import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save } from '@mui/icons-material';
import InputFieldsData from '.';
import useForm from '../../hooks/useForm';
import InputField from '../ui/InputField';
import { useUpdateUserProfileDataMutation } from '../../store/api/userApi';
import { getToken } from '../../utils/authHelpers';
import useApiToast from '../../hooks/useApiToast';
import Validator from '../../utils/validator';

const InitialData = {
  firstName: '',
  lastName: '',
  email: '',
  telNumber: '',
  education: '',
  about: ''
};

const BioDataForm = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [updateUserProfileData, { isLoading, isError, error, isSuccess, data: user }] =
    useUpdateUserProfileDataMutation();
  useApiToast({
    user,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Updating your bio data...',
    successMsg: 'Successfully updated data!'
  });
  const token = getToken();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validator = new Validator(formData); 
    if (validator.whiteSpaces().length !== 0) {
      toast.error(validator.message, { autoClose: 4000 });
      return;
    }
    await updateUserProfileData({ token, payload: formData });
  };

  console.log(user);

  useEffect(() => {
    if (isSuccess) {
      setFormData(InitialData);
      navigate('/my-profile');
    }
  }, [isSuccess]);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  return (
    <form className="space-y-6 lg:space-y-0" onSubmit={handleSubmit}>
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
        <div className="w-full lg:basis-1/3 lg:flex-grow lg:px-3">
          <label
            className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-4"
            htmlFor="grid-state">
            About
          </label>
          <textarea
            required
            id="message"
            rows={3}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-2 border-gray-300 focus:bg-white focus:ring-4 focus:outline-none focus:ring-lime-300"
            name="about"
            onChange={handleChange}
            value={formData.about}
            placeholder="about yourself..."></textarea>
        </div>
      </div>
      <button className="py-2 px-4 flex items-center gap-2 text-white rounded-md bg-lime-600">
        <Save />
        <span>Submit</span>
      </button>
    </form>
  );
};

export default BioDataForm;
