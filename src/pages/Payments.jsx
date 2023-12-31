import { useEffect, useState } from 'react';
import { Paid, AttachMoney, Badge, People } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
// import ChartCard from '../components/ChartCard';
// import SparkAreaChart from '../components/charts/SparkAreaChart';
// import SparkLineChart from '../components/charts/SparkLineChart';
import useApiToast from '../hooks/useApiToast';
import { useGetAllPaymentsQuery } from '../store/api/paymentApi';

// const chartCardData = [
//   {
//     id: 'c1',
//     title: 'Revenue',
//     amount: '56k',
//     percentage: 4,
//     icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
//     chart: <SparkAreaChart />
//   },
//   {
//     id: 'c2',
//     title: 'Expenses',
//     amount: '20k',
//     percentage: 4,
//     icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
//     chart: <SparkLineChart />
//   },
//   {
//     id: 'c3',
//     title: 'Income',
//     amount: '36k',
//     percentage: 4,
//     icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
//     chart: <SparkAreaChart />
//   }
// ];

const Payments = () => {
  const {
    isLoading,
    isError,
    error,
    isSuccess,
    data: payments,
  } = useGetAllPaymentsQuery();
  useApiToast({
    payments,
    isLoading,
    isSuccess,
    isError,
    error,
    loadingMsg: 'Fetching all payments..',
    successMsg: 'UI updated successfully'
  });

  return (
    <AdminLayout
      header="Payments"
      icon={<Paid className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        {/* <div className="flex flex-wrap gap-6">
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
        </div> */}
        <TableGrid page="payments" tableData={payments?.data} />
      </div>
    </AdminLayout>
  );
};

export default Payments;
