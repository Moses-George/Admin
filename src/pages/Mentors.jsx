import { useEffect, useState } from 'react';
import { Badge, AttachMoney, People } from '@mui/icons-material';
import { toast } from 'react-toastify';
import AdminLayout from '../components/layout/AdminLayout';
import useToggleStore from '../store/useToggleStore';
import TableGrid from '../components/TableGrid';
import MemberForm from '../components/ui/modal/MemberForm';
import SubNavbar from '../components/layout/SubNavbar';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useMembersFacade from '../facades/useMembersFacade';
import useTableQueryParams from '../hooks/useTableQueryParams';

const chartCardData = [
  {
    id: 'c1',
    title: 'All',
    amount: '56k',
    percentage: 4,
    icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  },
  {
    id: 'c2',
    title: 'Active',
    amount: '20k',
    percentage: 4,
    icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkLineChart />
  },
  {
    id: 'c3',
    title: 'Inactive',
    amount: '36k',
    percentage: 4,
    icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  }
];

const Mentors = () => {
  const [id, setId] = useState(undefined);

  const { isVisible, toggleVisibility } = useToggleStore((state) => ({
    isVisible: state.isVisible,
    toggleVisibility: state.toggleVisibility
  }));

  const { members, fetchMembers, loading, error, success } = useMembersFacade();

  const { setSearchParams, tableData, param } = useTableQueryParams(
    'mentorStatus',
    members,
    'status'
  );

  useEffect(() => {
    if (loading) {
      setId(toast.loading('Fetching mentors...'));
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
  }, [loading, success, members]);

  useEffect(() => {
    fetchMembers('mentors');
  }, []);

  return (
    <>
      {isVisible && <MemberForm isNewMember={true} onClose={toggleVisibility} />}
      <AdminLayout
        header="Mentors"
        icon={<Badge className="text-slate-800" sx={{ fontSize: '40px' }} />}>
        <div className="lg:mx-6 w-full space-y-6">
          <SubNavbar
            page="mentors"
            query="mentorStatus"
            param={param}
            onClick={toggleVisibility}
            array={members}
            filterKey="status"
          />
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
          <TableGrid
            page="mentors"
            tableData={tableData}
            setSearchParams={setSearchParams}
            param={param}
            query="mentorStatus"
          />
        </div>
      </AdminLayout>
    </>
  );
};

export default Mentors;
