import { create } from 'zustand';
import axios from 'axios';

const initialState = {
  transactions: [],
  loading: false,
  success: false,
  error: ''
};

const useTransactionStore = create((set) => ({
  transactions: initialState.transactions,
  loading: initialState.loading,
  error: initialState.error,
  success: initialState.success,

  fetchTransactions: async () => {
    set({ loading: true, error: '', transactions: [], success: false });
    try {
      const { data } = await axios.get('./data/transactions.json');
      set({ loading: false, transactions: data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error });
    }
  }
}));

export default useTransactionStore;
