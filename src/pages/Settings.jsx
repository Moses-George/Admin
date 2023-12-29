import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SettingsSharp} from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import BioDataForm from '../components/settings/BioDataForm';
import ChangePasswordForm from '../components/settings/ChangePasswordForm';
import ChangeDPForm from '../components/settings/ChangeDPForm';
import { getToken } from '../utils/authHelpers';

const Settings = () => {

  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  return (
    <AdminLayout header="Settings" icon={<SettingsSharp />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <section className="bg-white lg:p-12 p-6 rounded-md glossy space-y-10">
          <h1 className="text-2xl text-slate-700 font-medium">Bio Data Settings</h1>
          <ChangeDPForm />
          <BioDataForm />
        </section>
        <section className="bg-white lg:p-12 p-6 rounded-md glossy space-y-10">
          <h1 className="text-2xl text-slate-700 font-medium">Change Password</h1>
          <ChangePasswordForm />
        </section>
      </div>
    </AdminLayout>
  );
};

export default Settings;
