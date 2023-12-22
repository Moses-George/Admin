import useJobsStore from '../store/useJobsStore';

const useJobsFacade = () => {
  const { jobs, loading, error, success, fetchJobs } = useJobsStore( 
    (state) => ({
      jobs: state.jobs,
      loading: state.loading,
      error: state.error,
      success: state.success,
      fetchJobs: state.fetchJobs,
    }),
  );

  return { jobs, loading, error, success, fetchJobs };
};

export default useJobsFacade;
