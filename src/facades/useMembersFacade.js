import useMembersStore from '../store/useMembersStore';

const useMembersFacade = () => {
  const { members, loading, error, success, fetchMembers } = useMembersStore((state) => ({
    members: state.members,
    loading: state.loading,
    error: state.error,
    success: state.success,
    fetchMembers: state.fetchMembers
  }));

  return { members, loading, error, success, fetchMembers };
};

export default useMembersFacade;
