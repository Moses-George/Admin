import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AccountBox,
  AdminPanelSettings,
  LinkedIn,
  Twitter,
  Facebook,
  Instagram
} from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import PanelHeader from '../components/PanelHeader';
import { useGetUserQuery } from '../store/api/userApi';
import { getToken } from '../utils/authHelpers';
import { capitalizeFirstLetter } from '../utils/helpers';

const MyProfile = () => {
  const token = getToken();
  const { isLoading, isError, error, isSuccess, data: user, refetch } = useGetUserQuery(token);
  const admin = user?.data[0];
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  useEffect(() => {
    refetch();
  }, [user]);

  return (
    <AdminLayout header="My Profile" icon={<AdminPanelSettings sx={{ fontSize: '50px' }} />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <PanelHeader admin={admin} loading={isLoading} />
        <div className="bg-white rounded-md glossy px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_8fr] gap-4 w-full">
            <div className="p-1.5 rounded-full border-4 h-fit w-fit border-lime-300">
              {isLoading || !admin ? (
                <div className="animate-pulse w-[10rem] h-[10rem] rounded-full bg-gray-300 shadow-md"></div>
              ) : admin?.imageUrl ? (
                <img src={admin?.imageUrl} alt="" className="rounded-full h-[10rem] w-[10rem]" />
              ) : (
                <AccountBox className="text-slate-800" sx={{ fontSize: '170px' }} />
              )}
            </div>

            <div className="space-y-8 w-full">
              <div className="flex flex-col lg:flex-row w-full space-y-6">
                <div className="w-full space-y-2">
                  {isLoading || !admin ? (
                    <h1 className="animate-pulse w-60 h-10 bg-gray-200"></h1>
                  ) : (
                    <h1 className="text-3xl text-lime-900 font-medium uppercase">
                      {capitalizeFirstLetter(admin?.firstName)}{' '}
                      {capitalizeFirstLetter(admin?.lastName)}
                    </h1>
                  )}
                  <p>ADMIN</p>
                </div>
                {/* <div className="text-end gap-2 flex w-fit items-center">
                  <a href='' className="p-2 rounded-md bg-slate-100 border" target='_blank' rel="noreferrer">
                    <Instagram className="text-blue-500" />
                  </a>
                  <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                    <Facebook />
                  </Link>
                  {
                    <Link className="p-2 rounded-md bg-slate-100 border" aria-disabled>
                      <Twitter className="text-blue-500" />
                    </Link>
                  }
                </div> */}
              </div>

              <div className="flex flex-wrap gap-8 w-full">
                <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">UUID</p>
                    <p className="text-slate-600">#{admin?.id}</p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">EMAIL</p>
                    <p className="text-slate-600">{admin?.email}</p>
                  </div>
                </div>
                <div className="jsutify-end space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">EXPERIENCE</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">COUNTRY</p>
                    <p className="text-slate-600">Null</p>
                  </div>
                </div>
                <div className="text-en space-y-6 flex-grow basis-1/4 w-full">
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">TEL NUMBER</p>
                    <p className="text-slate-600">
                      {!admin?.telNumber ? 'Null' : admin?.telNumber}
                    </p>
                  </div>
                  <div className="w-full">
                    <p className="text-slate-800 font-medium">EDUCATION</p>
                    <p className="text-slate-600">
                      {!admin?.education ? 'Null' : admin?.education}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-md glossy px-8 py-16">
          <div className="space-y-3">
            <h2 className="font-semibold text-2xl text-slate-800">ABOUT</h2>
            {isLoading || !admin ? (
              <p className="w-full h-60 bg-gray-200 animate-pulse"></p>
            ) : (
              <p className="text-slate-600">{!admin?.about ? 'No biography' : admin?.about}</p>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MyProfile;
