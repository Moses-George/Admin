import useJobsStore from '../store/useJobsStore';
// import {useShallow} from "zustand"
import { shallow } from 'zustand/shallow';

const useJobsFacade = () => {
  const { jobs, loading, error, success, fetchJobs } = useJobsStore( 
    (state) => ({
      jobs: state.jobs,
      loading: state.loading,
      error: state.error,
      success: state.success,
      fetchJobs: state.fetchJobs,
    }),
    // shallow
  );

  return { jobs, loading, error, success, fetchJobs };
};

export default useJobsFacade;
