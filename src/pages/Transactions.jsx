import { useEffect, useState } from 'react';
import { Paid, AttachMoney, Badge, People } from '@mui/icons-material';
import { toast } from 'react-toastify';
import AdminLayout from '../components/layout/AdminLayout';
import SubNavbar from '../components/layout/SubNavbar';
import TableGrid from '../components/TableGrid';
import ChartCard from '../components/ChartCard';
import SparkAreaChart from '../components/charts/SparkAreaChart';
import SparkLineChart from '../components/charts/SparkLineChart';
import useTransactionsFacade from '../facades/useTransactionsFacade';
import useTableQueryParams from '../hooks/useTableQueryParams';

const chartCardData = [
  {
    id: 'c1',
    title: 'Revenue',
    amount: "56k",
    percentage: 4,
    icon: <Badge className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  },
  {
    id: 'c2',
    title: 'Expenses',
    amount: "20k",
    percentage: 4,
    icon: <People className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkLineChart />
  },
  {
    id: 'c3',
    title: 'Income',
    amount: "36k",
    percentage: 4,
    icon: <AttachMoney className="text-3xl text-amber-500" sx={{ fontSize: '40px' }} />,
    chart: <SparkAreaChart />
  }
];

const Transactions = () => {
  const [id, setId] = useState(undefined);
  const { transactions, fetchTransactions, loading, error, success } = useTransactionsFacade();

  const { setSearchParams, tableData, param } = useTableQueryParams(
    'transactionStatus',
    transactions,
    'status'
  );

  useEffect(() => {
    if (loading) {
      setId(toast.loading('Fetching transactions data...'));
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
  }, [loading, success, transactions]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <AdminLayout
      header="Transactions"
      icon={<Paid className="text-slate-800" sx={{ fontSize: '40px' }} />}>
      <div className="lg:mx-6 w-full space-y-6">
        <SubNavbar
          page="transactions"
          query="transactionStatus"
          param={param}
          array={transactions}
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
          page="transactions"
          tableData={tableData}
          setSearchParams={setSearchParams}
          param={param}
          query={'transactionStatus'}
        />
      </div>
    </AdminLayout>
  );
};

export default Transactions;
