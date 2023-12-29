import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AttachMoney, Badge, DashboardCustomize, People } from '@mui/icons-material';
import PanelHeader from '../components/PanelHeader';
import Revenue from '../components/dashboard/Revenue';
import AdminLayout from '../components/layout/AdminLayout';
import MentorsSummary from '../components/MentorsSummary';
import ChartCard from '../components/ChartCard';
import LineChart from '../components/charts/LineChart';
import RadialBarChart from '../components/charts/RadialBarChart';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import { useGetUserQuery } from '../store/api/userApi';
import { getToken } from '../utils/authHelpers';
import { useGetAllMembersQuery } from '../store/api/memberApi';

const getChartCardData = (mentors, mentees, income) => {
  const chartCardData = [
    {
      id: 'c1',
      title: 'Mentors',
      amount: mentors,
      percentage: 0,
      icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    },
    {
      id: 'c2',
      title: 'Mentees',
      amount: mentees,
      percentage: 0,
      icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkLineChart />
    },
    {
      id: 'c3',
      title: 'Subscription',
      amount: `$${income}`,
      percentage: 0,
      icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    }
  ];

  return chartCardData;
};

const Dashboard = () => {
  const token = getToken();
  const { isLoading, isError, error, isSuccess, data: user } = useGetUserQuery(token);
  const { data: mentors } = useGetAllMembersQuery('mentors');
  const { data: mentees } = useGetAllMembersQuery('mentees');
  const mentorsNumber = mentors?.data?.length; 
  const menteesNumber = mentees?.data?.length;  
  const navigate = useNavigate(); 

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  return (
    <AdminLayout header="Dashboard" icon={<DashboardCustomize />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <PanelHeader admin={user?.data[0]} loading={isLoading} />
        <div className="flex flex-wrap gap-6">
          {getChartCardData(mentorsNumber, menteesNumber, '0.0').map((data) => {
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
                data={mentors && mentees}
              />
            );
          })}
        </div>
        <section className="grid lg:grid-cols-[6.5fr_3.5fr] gap-6">
          <Revenue />
          <PolarAreaChart heading="Jobs Category" chartData={[]} />
        </section>
        <MentorsSummary />
        <section className="grid lg:grid-cols-[6.5fr_3.5fr] gap-6">
          <LineChart />
          <RadialBarChart heading="Radial Bar" chartData={[]} />
        </section>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
