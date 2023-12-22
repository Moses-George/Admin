import { create } from 'zustand';
import { http } from '../lib/http.service';

const initialState = {
  jobs: [],
  loading: false,
  success: false,
  error: ''
};

const useJobsStore = create((set) => ({
  jobs: initialState.jobs,
  loading: initialState.loading,
  error: initialState.error,
  success: initialState.success,

  fetchJobs: async () => {
    set({ loading: true, error: '', jobs: [], success: false });
    try {
      const response = await http.service().get('/jobs.json');
      set({ loading: false, jobs: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  }
}));

export default useJobsStore;
