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
import useJobsFacade from '../facades/useJobsFacade';
import useAdminFacade from '../facades/useAdminFacade';
import useAuth from '../hooks/useAuth';

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
      title: 'Income',
      amount: `$${income}`,
      percentage: 0,
      icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    }
  ];

  return chartCardData;
};

const Dashboard = () => {
  const { fetchSingleAdmin, loading, success, error, admin } = useAdminFacade();
  const { accessToken } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchSingleAdmin(accessToken);
  }, []);

  useEffect(() => {
    if (!accessToken) {
      navigate('/', { replace: true });
    }
  }, [accessToken]);

  return (
    <AdminLayout header="Dashboard" icon={<DashboardCustomize />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <PanelHeader admin={admin} loading={loading} />
        <div className="flex flex-wrap gap-6">
          {getChartCardData(0, 0, '0.0').map((data) => {
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
