import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AttachMoney, Badge, DashboardCustomize, People } from '@mui/icons-material';
import PanelHeader from '../components/PanelHeader';
import Revenue from '../components/dashboard/MembersChart';
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
import { accountCreatedDate, getTotalSubscriptionAmount } from '../utils/chartHelpers';
import { useGetAllPaymentsQuery } from '../store/api/paymentApi';

const Dashboard = () => {
  const selectedYear = useSelector((state) => state.chartYearSelector.selectedYear);
  const token = getToken();
  const { isLoading, isError, error, isSuccess, data: user } = useGetUserQuery(token);
  const { data: mentors } = useGetAllMembersQuery('mentors');
  const { data: mentees } = useGetAllMembersQuery('mentees');
  const { data: payments } = useGetAllPaymentsQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);
  console.log(payments);

  const { totalSubscriptionAmount, selectedYearTotalAmount, EachMonthTotalAmount } =
    getTotalSubscriptionAmount(payments?.data, selectedYear);

  const {
    totalAccounts: mentorsNumber,
    selectedYearTotal: mentorsSelectedYearTotal,
    EachMonthTotal: mentorsEachMonthTotal
  } = accountCreatedDate(mentors?.data, selectedYear);
  const {
    totalAccounts: menteesNumber,
    selectedYearTotal: menteesSelectedYearTotal,
    EachMonthTotal: menteesEachMonthTotal
  } = accountCreatedDate(mentees?.data, selectedYear);

  const chartCardData = [
    {
      id: 'c1',
      title: 'Mentors',
      yearTotal: mentorsSelectedYearTotal,
      total: mentorsNumber,
      icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart data={mentorsEachMonthTotal} name="mentors" />
    },
    {
      id: 'c2',
      title: 'Mentees',
      yearTotal: menteesSelectedYearTotal,
      total: menteesNumber,
      icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart data={menteesEachMonthTotal} name="mentees" />
    },
    {
      id: 'c3',
      title: 'Subscription',
      yearTotal: `$${selectedYearTotalAmount}`,
      total: `$${totalSubscriptionAmount}`,
      percentage: 0,
      icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart data={EachMonthTotalAmount} name="subscriptions" />
    }
  ];

  return (
    <AdminLayout header="Dashboard" icon={<DashboardCustomize />}>
      <div className="lg:mx-6 space-y-6 w-full">
        <PanelHeader admin={user?.data[0]} loading={isLoading} />
        <div className="flex flex-wrap gap-6">
          {chartCardData.map((data) => {
            const { id, title, icon, chart, yearTotal, total } = data;
            return (
              <ChartCard
                key={id}
                title={title}
                yearTotal={yearTotal}
                total={total}
                icon={icon}
                chart={chart}
                loading={isLoading}
                data={mentors && mentees}
              />
            );
          })}
        </div>
        <section className="grid lg:grid-cols-[6.5fr_3.5fr] gap-6">
          <Revenue
            name_1="Mentors Numbers"
            name_2="Mentees Number"
            data_1={mentorsEachMonthTotal}
            data_2={menteesEachMonthTotal}
          />
          <PolarAreaChart heading="Jobs Category" chartData={[]} />
        </section>
        <MentorsSummary />
        <section className="grid lg:grid-cols-[6.5fr_3.5fr] gap-6">
          <LineChart
            name_1="Mentors"
            name_2="Mentees"
            name_3="Subscriptions"
            data_1={mentorsEachMonthTotal}
            data_2={menteesEachMonthTotal}
            data_3={EachMonthTotalAmount}
          />
          <RadialBarChart heading="Jobs" chartData={[]} />
        </section>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
