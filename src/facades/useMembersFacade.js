import useMembersStore from '../store/useMembersStore';

const useMembersFacade = () => {
  const {
    members,
    loading,
    error,
    success,
    resetState,
    updateState,
    fetchMembers,
    DeleteMember,
    fetchMentor,
    verifyMentor
  } = useMembersStore((state) => ({
    members: state.members,
    loading: state.loading,
    error: state.error,
    success: state.success,
    resetState: state.resetState,
    updateState: state.updateState,
    fetchMembers: state.fetchMembers,
    DeleteMember: state.DeleteMember,
    fetchMentor: state.fetchMentor,
    verifyMentor: state.verifyMentor
  }));

  return {
    members,
    loading,
    error,
    success,
    resetState,
    updateState,
    fetchMembers,
    DeleteMember,
    fetchMentor,
    verifyMentor
  };
};

export default useMembersFacade;
