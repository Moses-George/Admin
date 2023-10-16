import { create } from 'zustand';
import axios from 'axios';

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
      const { data } = await axios.get(`./data/${member}.json`);
      set({ loading: false, members: data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error });
    }
  }
}));

export default useMembersStore;
