import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Add, AddBox, AddCircle } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import JobForm from '../components/jobs/JobForm';
import useAuth from '../hooks/useAuth';

const NewJob = () => {

  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  return (
    <AdminLayout header="New Job" icon={<AddCircle sx={{fontSize:"40px"}} />}>
      <div className="lg:mx-6 w-full">
        <section className="bg-white rounded-md shadow-md p-12 space-y-16 glossy">
          <div className="flex items-center gap-3">
            <AddCircle className='text-amber-700' sx={{fontSize:"35px"}} />
            <h1 className="text-3xl text-slate-800 font-medium">Add a new job</h1>
          </div>
          <JobForm  action="Add" />
        </section>
      </div>
    </AdminLayout>
  );
};

export default NewJob;
