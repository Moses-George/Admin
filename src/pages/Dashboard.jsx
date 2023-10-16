import { useEffect, useState } from 'react';
import { AttachMoney, Badge, DashboardCustomize, People } from '@mui/icons-material';
import PanelHeader from '../components/PanelHeader';
import Revenue from '../components/dashboard/Revenue';
import AdminLayout from '../components/layout/AdminLayout';
import MenteesSummary from '../components/MenteesSummary';
import ChartCard from '../components/ChartCard';
import LineChart from '../components/charts/LineChart';
import RadialBarChart from '../components/charts/RadialBarChart';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import PolarAreaChart from '../components/charts/PolarAreaChart';
import useJobsFacade from '../facades/useJobsFacade';
import { toast } from 'react-toastify';

const chartCardData = [
  {
    id: 'c1',
    title: 'Mentors',
    amount: 56,
    percentage: 4,
    icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  },
  {
    id: 'c2',
    title: 'Mentees',
    amount: 56,
    percentage: 4,
    icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkLineChart />
  },
  {
    id: 'c3',
    title: 'Income',
    amount: 56,
    percentage: 4,
    icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  }
];

const Dashboard = () => {
  const [id, setId] = useState(undefined);
  const { jobs, fetchJobs, loading, success, error } = useJobsFacade();

  useEffect(() => {
    if (loading) {
      setId(toast.loading('Updating UI...'));
    }
    if (error) {
      toast.update(id, { render: error, type: 'error', isLoading: false, autoClose: 3000 });
    }
    if (success) {
      toast.update(id, {
        render: 'UI updated successfully!',
        type: 'success',
        isLoading: false,
        autoClose: 1000
      });
    }
  }, [loading, success, jobs]);

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <AdminLayout header="Dashboard" icon={<DashboardCustomize />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <PanelHeader />
        <div className="flex flex-wrap gap-6"> 
          {chartCardData.map((data) => {
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
          <PolarAreaChart heading="Jobs Category" chartData={jobs} />
        </section>
        <MenteesSummary />
        <section className="grid lg:grid-cols-[6.5fr_3.5fr] gap-6">
          <LineChart />
          <RadialBarChart heading="Radial Bar" chartData={jobs}  />
        </section>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
