import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, AttachMoney, People } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useMembersFacade from '../facades/useMembersFacade';
import useApiToast from '../hooks/useApiToast';
import useAuth from '../hooks/useAuth';

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
      percentage: 0,
      icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    }
  ];

  return chartCardData;
}

const Mentors = () => {
  const { members, fetchMembers, loading, error, success, resetState } = useMembersFacade();
  useApiToast(
    { data: members, loading, success, error },
    { loadingMsg: 'Fetching Mentors...', successMsg: 'UI successfully updated' }
  );
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  useEffect(() => {
    fetchMembers('mentors');
  }, []);

  return (
    <AdminLayout
      header="Mentors"
      icon={<Badge className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <div className="flex flex-wrap gap-6">
          {getChartCardData(10, 10, 0).map((data) => {
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
          page="mentors"
          tableData={members}
        />
      </div>
    </AdminLayout>
  );
};

export default Mentors;
