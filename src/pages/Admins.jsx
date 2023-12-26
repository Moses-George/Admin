import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import useApiToast from '../hooks/useApiToast';
import { getToken } from '../utils/authHelpers';
import { useGetAllUsersQuery } from '../store/api/userApi';

const Admins = () => {
  const { isLoading, isError, error, isSuccess, data: users, refetch } = useGetAllUsersQuery();
  useApiToast({
    users,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Fetching all admins..',
    successMsg: 'UI updated successfully'
  });
  const token = getToken();

  const navigate = useNavigate();
  console.log(users);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  useEffect(() => {
    refetch();
  }, [users?.data]);

  return (
    <AdminLayout
      header="Admins"
      icon={<Badge className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <TableGrid page="admins" tableData={users?.data} refetch={refetch} />
      </div>
    </AdminLayout>
  );
};

export default Admins;
