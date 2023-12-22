import { AccountBox, AdminPanelSettings } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import PanelHeader from '../components/PanelHeader';
import ProfileBaseData from '../components/profile/ProfileBaseData';

const MyProfile = () => {
  return (
    <AdminLayout header="My Profile" icon={<AdminPanelSettings sx={{ fontSize: '50px' }} />}>
      <div className="mx-6 space-y-6 w-full">
        <PanelHeader />
        <ProfileBaseData />
      </div>
    </AdminLayout>
  );
};

export default MyProfile;
