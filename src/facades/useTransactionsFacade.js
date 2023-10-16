import useTransactionStore from '../store/useTransactionsStore';

const useTransactionsFacade = () => {
  const { transactions, loading, error, success, fetchTransactions } = useTransactionStore( 
    (state) => ({
      transactions: state.transactions,
      loading: state.loading,
      error: state.error,
      success: state.success,
      fetchTransactions: state.fetchTransactions,
    }),
    // shallow
  );

  return { transactions, loading, error, success, fetchTransactions };
};

export default useTransactionsFacade;
