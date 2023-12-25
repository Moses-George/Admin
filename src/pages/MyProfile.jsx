import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AccountBox, AdminPanelSettings, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import PanelHeader from '../components/PanelHeader';
import useAdminFacade from '../facades/useAdminFacade';
import useAuth from '../hooks/useAuth';

const MyProfile = () => {
  const { fetchSingleAdmin, loading, success, error, admin } = useAdminFacade();

  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchSingleAdmin(accessToken);
  }, []);

  return (
    <AdminLayout header="My Profile" icon={<AdminPanelSettings sx={{ fontSize: '50px' }} />}>
      <div className="mx-6 space-y-6 w-full">
        <PanelHeader admin={admin} loading={loading} />
        <div className="bg-white rounded-md glossy px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_8fr] gap-4 w-full">
            <div className="">
              <AccountBox className="text-slate-800" sx={{ fontSize: '170px' }} />
            </div>

            <div className="space-y-8 w-full">
              <div className="flex flex-col lg:flex-row w-full space-y-6">
                <div className="w-full space-y-2">
                  {loading || Object.keys(admin).length === 0 ? (
                    <h1 className="animate-pulse w-60 h-10 bg-gray-200"></h1>
                  ) : (
                    <h1 className="text-3xl text-lime-900 font-medium">
                      {admin?.firstName} {admin?.lastName}
                    </h1>
                  )}
                  <p>Admin</p>
                </div>
                <div className="text-end gap-2 flex w-fit items-center">
                  <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                    <LinkedIn className="text-blue-500" />
                  </Link>
                  <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                    <Facebook />
                  </Link>
                  {
                    <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                      <Twitter className="text-blue-500" />
                    </Link>
                  }
                </div>
              </div>

              <div className="flex flex-wrap gap-8 w-full">
                <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">UUID</p>
                    <p className="text-slate-600">#{admin?.id}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">Email</p>
                    <p className="text-slate-600">{admin?.email}</p>
                  </div>
                </div>
                <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">Experience</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">Country</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                </div>
                <div className="text-en space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">Phone Number</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">Higher Education</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MyProfile;
