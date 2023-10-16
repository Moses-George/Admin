import useMembersStore from "../store/useMembersStore"
// import {useShallow} from "zustand"
import { shallow } from 'zustand/shallow';

const useMembersFacade = () => {
  const { members, loading, error, success, fetchMembers } = useMembersStore( 
    (state) => ({
      members: state.members,
      loading: state.loading,
      error: state.error,
      success: state.success,
      fetchMembers: state.fetchMembers,
    }),
    // shallow
  );

  return { members, loading, error, success, fetchMembers };
};

export default useMembersFacade;
