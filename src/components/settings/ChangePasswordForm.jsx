import { useNavigate } from 'react-router-dom';
import { Key, Save } from '@mui/icons-material';
import InputField from '../ui/InputField';
import useForm from '../../hooks/useForm';
import Validator from '../../utils/validator';
import useApiToast from '../../hooks/useApiToast';
import { useEffect } from 'react';
import { useUpdateUserPasswordMutation } from '../../store/api/userApi';
import { getToken } from '../../utils/authHelpers';

const InitialData = {
  oldPassword: '',
  newPassword: ''
};

const ChangePasswordForm = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData);
  const [updateUserPassword, { isLoading, isError, error, isSuccess, data: user }] =
    useUpdateUserPasswordMutation();
  useApiToast({
    user,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Sending your request...',
    successMsg: 'Successfully changed password!'
  });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const token = getToken();
    const validator = new Validator(formData);
    if (validator.whiteSpaces().length !== 0) {
      toast.error(validator.message, { autoClose: 4000 });
      return;
    }
    updateUserPassword({ token, payload: formData });
  };

  useEffect(() => {
    if (isSuccess) {
      setFormData(InitialData);
    }
  }, [isSuccess]); 

  return (
    <form className="space-y-6 max-w-md" onSubmit={handleSubmit}>
      <div className="w-ful">
        <label
          className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
          htmlFor="current_password">
          Current password
        </label>
        <InputField
          name="oldPassword"
          type="password"
          placeholder="Current Password"
          value={formData.oldPassword}
          onChange={handleChange}
          ringColorClass="focus:ring-lime-300"
          icon={<Key />}
        />
      </div>
      <div className="w-full">
        <label
          className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
          htmlFor="new_password">
          New password
        </label>
        <InputField
          name="newPassword"
          type="password"
          placeholder="New Password"
          value={formData.newPassword}
          onChange={handleChange}
          ringColorClass="focus:ring-lime-300"
          icon={<Key />}
        />
      </div>
      <button className="py-2 px-4 flex items-center gap-2 text-white rounded-md bg-lime-600">
        <Save />
        <span>Submit</span>
      </button>
    </form>
  );
};

export default ChangePasswordForm;
