import { useEffect, useState } from 'react';
import { Paid, AttachMoney, Badge, People } from '@mui/icons-material';
import AdminLayout from '../components/layout/AdminLayout';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useTransactionsFacade from '../facades/useTransactionsFacade';
import useApiToast from '../hooks/useApiToast';

const chartCardData = [
  {
    id: 'c1',
    title: 'Revenue',
    amount: '56k',
    percentage: 4,
    icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  },
  {
    id: 'c2',
    title: 'Expenses',
    amount: '20k',
    percentage: 4,
    icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkLineChart />
  },
  {
    id: 'c3',
    title: 'Income',
    amount: '36k',
    percentage: 4,
    icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  }
];

const Transactions = () => {
  const { transactions, fetchTransactions, loading, error, success } = useTransactionsFacade();
  useApiToast(
    { data: transactions, loading, success, error },
    { loadingMsg: 'Fetching all Transactions...', successMsg: 'UI successfully updated' }
  );

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <AdminLayout
      header="Transactions"
      icon={<Paid className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
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
        <TableGrid page="transactions" tableData={transactions} />
      </div>
    </AdminLayout>
  );
};

export default Transactions;
