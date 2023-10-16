import { create } from 'zustand';
import HttpService from '../lib/http.service';

const initialState = {
  jobs: [],
  loading: false,
  success: false,
  error: ''
};

const http = new HttpService();

const useJobsStore = create((set) => ({
  jobs: initialState.jobs,
  loading: initialState.loading,
  error: initialState.error,
  success: initialState.success,

  fetchJobs: async () => {
    set({ loading: true, error: '', jobs: [], success: false });
    try {
      const response = await http.service().get('/jobs.json');
      console.log(response);
      set({ loading: false, jobs: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error });
    }
  }
}));

export default useJobsStore;
