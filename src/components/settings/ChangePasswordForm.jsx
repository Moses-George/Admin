import { Key, Save } from '@mui/icons-material';
import InputField from '../ui/InputField';
import useForm from '../../hooks/useForm';

const InitialData = {
  current_password: '',
  new_password: ''
};

const ChangePasswordForm = () => {
  const { formData, setFormData, handleChange } = useForm(InitialData); 
  return (
    <form className="space-y-6 max-w-md">
      <div className="w-ful">
        <label
          className="relative block uppercase tracking-wide text-gray-700 text-xs font-bold mb-3"
          htmlFor="current_password">
          Current password
        </label>
        <InputField
          name="current_password"
          type="password"
          placeholder="Current Password"
          value={formData.current_password}
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
          name="new_password"
          type="password"
          placeholder="New Password"
          value={formData.new_password}
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
