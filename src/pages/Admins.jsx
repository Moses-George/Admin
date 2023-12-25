import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import useApiToast from '../hooks/useApiToast';
import useAdminFacade from '../facades/useAdminFacade';
import useAuth from '../hooks/useAuth';

const Admins = () => {
  const { fetchAdmins, loading, success, error, data, resetState, resetDataState } = useAdminFacade();

  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

//   useEffect(()=> {})

  useEffect(() => {
    resetDataState();
    fetchAdmins();
  }, []);
  console.log(data)

  return (
    <AdminLayout
      header="Admins"
      icon={<Badge className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <TableGrid page="admins" tableData={data} />
      </div>
    </AdminLayout>
  );
};

export default Admins;
