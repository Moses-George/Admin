import useJobsStore from '../store/useJobsStore';

const useJobsFacade = () => {
  const { jobs, loading, error, isError, success, fetchJobs } = useJobsStore( 
    (state) => ({
      jobs: state.jobs,
      loading: state.loading,
      error: state.error,
      isError: state.isError,
      success: state.success,
      fetchJobs: state.fetchJobs,
    }),
  );

  return { jobs, loading, error, isError, success, fetchJobs };
};

export default useJobsFacade;
