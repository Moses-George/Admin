import { AttachMoney, Badge, DashboardCustomize, People } from '@mui/icons-material';
import JobsCategoryChart from '../components/JobsCategoryChart';
import PanelHeader from '../components/PanelHeader';
import Revenue from '../components/Revenue';
import AdminLayout from '../components/layout/AdminLayout';
import ParentSize from '@visx/responsive/lib/components/ParentSize';
import MenteesMapChart from '../components/MenteesMapChart';
import MenteesSummary from '../components/MenteesSummary';
import ChartCard from '../components/ChartCard';

const chartCardData = [
  {
    id: 'c1',
    title: 'Mentors',
    amount: 56,
    percentage: 4,
    icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />
  },
  {
    id: 'c2',
    title: 'Mentees',
    amount: 56,
    percentage: 4,
    icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />
  },
  {
    id: 'c3',
    title: 'Income',
    amount: 56,
    percentage: 4,
    icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />
  }
];

const Dashboard = () => {
  
  return (
    <AdminLayout header="Dashboard" icon={<DashboardCustomize />}>
      <div className="mx-6 space-y-6 w-full">
        <PanelHeader />
        <div className="flex gap-x-6">
          {chartCardData.map((data) => {
            const { title, amount, percentage, icon } = data;
            return <ChartCard title={title} amount={amount} percentage={percentage} icon={icon} />;
          })}
        </div>

        {/* <section className="w-full">
          <ParentSize>
            {({ width, height }) => <MenteesMapChart width={width} height={height} />}
          </ParentSize>
        </section> */}

        <section className="grid grid-cols-[6.5fr_3.5fr] gap-6">
          <Revenue />
          <JobsCategoryChart />
        </section>
        <MenteesSummary />
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
