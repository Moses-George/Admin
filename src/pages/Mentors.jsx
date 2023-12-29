import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, AttachMoney, People, PersonRemoveAlt1Sharp } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import useApiToast from '../hooks/useApiToast';
import { useGetAllMembersQuery } from '../store/api/memberApi';
import { getToken } from '../utils/authHelpers';
import { accountCreatedDate } from '../utils/helpers';

const getChartCardData = (all, active, inactive, data) => {
  const chartCardData = [
    {
      id: 'c1',
      title: 'All',
      amount: all,
      percentage: 4,
      icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    },
    {
      id: 'c2',
      title: 'Active',
      amount: active,
      percentage: 4,
      icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    },
    {
      id: 'c3',
      title: 'Inactive',
      amount: inactive,
      percentage: 0,
      icon: <PersonRemoveAlt1Sharp className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
      chart: <SparkAreaChart />
    }
  ];

  return chartCardData;
};

const Mentors = () => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: members,
    refetch
  } = useGetAllMembersQuery('mentors');
  useApiToast({
    members,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Fetching all mentors..',
    successMsg: 'UI updated successfully'
  });
  const token = getToken();
  const navigate = useNavigate();
  const all = members?.data?.length;
  const active = members?.data.filter((member) => member.verified)?.length;
  const inactive = members?.data.filter((member) => !member.verified)?.length;

  const [selectedYear, setSelectedYear] = useState(2023);

  const { validYears, EachMonthData } = accountCreatedDate(members?.data, selectedYear);

  useEffect(() => {
    if (!token) {
      navigate('/', { replace: true });
    }
  }, [token]);

  console.log(members?.data)

  return (
    <AdminLayout
      header="Mentors"
      icon={<Badge className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <div className="flex flex-wrap gap-6">
          {getChartCardData(all, active, inactive, EachMonthData)?.map((data) => {
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
                onChange={(e) => setSelectedYear(e.target.value)}
                value={selectedYear}
                years={validYears}
              />
            );
          })}
        </div>
        <TableGrid page="mentors" tableData={members?.data} refetch={refetch} />
      </div>
    </AdminLayout>
  );
};

export default Mentors;
