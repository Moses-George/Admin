import { create } from 'zustand';
import { http } from '../lib/http.service';

const initialState = {
  members: [],
  loading: false,
  success: false,
  error: ''
};

const useMembersStore = create((set) => ({
  members: initialState.members,
  loading: initialState.loading,
  error: initialState.error,
  success: initialState.success,

  fetchMembers: async (member) => {
    set({ loading: true, error: '', members: [], success: false });
    try {
      const response = await http.service().get(`/${member}.json`);
      set({ loading: false, members: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error });
    }
  }
}));

export default useMembersStore;
