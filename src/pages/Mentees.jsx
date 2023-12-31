import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  People,
  Badge,
  AttachMoney,
  PersonAdd,
  Unsubscribe,
  Paid,
  MoneyOff
} from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useApiToast from '../hooks/useApiToast';
import { useGetAllMembersQuery } from '../store/api/memberApi';
import { getToken } from '../utils/authHelpers';

const getChartCardData = (subscribed, unsubscibed, Joined) => {
  const chartCardData = [
    {
      id: 'c1',
      title: 'Subscribed',
      amount: subscribed,
      percentage: 4,
      icon: <Paid className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkLineChart />
    },
    {
      id: 'c2',
      title: 'Unsubscribed',
      amount: unsubscibed,
      percentage: 4,
      icon: <MoneyOff className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkLineChart />
    },
    {
      id: 'c3',
      title: 'Joined',
      amount: Joined,
      percentage: 4,
      icon: <PersonAdd className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkLineChart />
    }
  ];

  return chartCardData;
};

const Mentees = () => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: members,
    refetch
  } = useGetAllMembersQuery('mentees');
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
  const menteesNumber = members?.data?.length;

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);
  console.log(members);

  return (
    <AdminLayout
      header="Mentees"
      icon={<People className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        {/* <div className="flex flex-wrap gap-6">
          {getChartCardData(0, 0, menteesNumber).map((data) => {
            const { id, title, amount, percentage, icon, chart } = data;
            return (
              <ChartCard
                key={id}
                title={title}
                amount={amount}
                percentage={percentage}
                icon={icon}
                chart={chart}
                loading={isLoading}
                data={members}
              />
            );
          })}
        </div> */}
        <TableGrid page="mentees" tableData={members?.data} refetch={refetch} />
      </div>
    </AdminLayout>
  );
};

export default Mentees;
