import { create } from 'zustand';
import { http } from '../lib/http.service';

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
      const response = await http.service().get('/transactions.json');
      set({ loading: false, transactions: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error });
    }
  }
}));

export default useTransactionStore;
