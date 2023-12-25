import useAdminStore from '../store/useAdminStore';

const useAdminFacade = () => {
  const {
    data,
    admin,
    loading,
    error,
    success,
    resetState,
    resetDataState,
    updateAdminState,
    fetchAdmins,
    fetchSingleAdmin,
    DeleteAdmin,
    logInAdmin,
    registerNewAdmin,
    updatePassword,
    resetPassword
  } = useAdminStore((state) => ({
    data: state.data,
    admin: state.admin,
    loading: state.loading,
    error: state.error,
    success: state.success,
    resetState: state.resetState,
    resetDataState: state.resetDataState,
    updateAdminState: state.updateAdminState,
    fetchAdmins: state.fetchAdmins,
    fetchSingleAdmin: state.fetchSingleAdmin,
    DeleteAdmin: state.DeleteAdmin,
    logInAdmin: state.logInAdmin,
    registerNewAdmin: state.registerNewAdmin,
    updatePassword: state.updatePassword,
    resetPassword: state.resetPassword
  }));

  return {
    data,
    admin,
    loading,
    error,
    success,
    resetState,
    resetDataState,
    updateAdminState,
    fetchAdmins,
    fetchSingleAdmin,
    DeleteAdmin,
    logInAdmin,
    registerNewAdmin,
    updatePassword,
    resetPassword
  };
};

export default useAdminFacade;
