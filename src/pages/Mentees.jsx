import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { People, Badge, AttachMoney } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useApiToast from '../hooks/useApiToast';
import { useGetAllMembersQuery } from '../store/api/memberApi';
import { getToken } from '../utils/authHelpers';

const getChartCardData = (all, active, inactive) => {

  const chartCardData = [
    {
      id: 'c1',
      title: 'All',
      amount: `${all}`,
      percentage: 4,
      icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    },
    {
      id: 'c2',
      title: 'Active',
      amount: `${active}`, 
      percentage: 4,
      icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkLineChart />
    },
    {
      id: 'c3',
      title: 'Inactive',
      amount: `${inactive}`, 
      percentage: 4,
      icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    }
  ];

  return chartCardData;
}

const Mentees = () => {

  const { isLoading, isError, error, isSuccess, data: members } = useGetAllMembersQuery('mentees');
  useApiToast({
    members,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Fetching all mentees..',
    successMsg: 'UI updated successfully'
  });
  const token = getToken();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);
  console.log(members)

  return (
    <AdminLayout
      header="Mentees"
      icon={<People className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <div className="flex flex-wrap gap-6">
          {getChartCardData(20, 15, 5).map((data) => {
            const { id, title, amount, percentage, icon, chart } = data;
            return (
              <ChartCard
                key={id}
                title={title}
                amount={amount}
                percentage={percentage}
                icon={icon}
                chart={chart}
              />
            );
          })}
        </div>
        <TableGrid
          page="mentees"
          tableData={members?.data}
        />
      </div>
    </AdminLayout>
  );
};

export default Mentees;
