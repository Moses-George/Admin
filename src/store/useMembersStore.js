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

  resetState: () => {
    set({ loading: false, error: '', success: false });
  },

  updateState: (data) => {
    set({  members: data });
  },

  fetchMembers: async (member) => {
    set({ loading: true, error: '', members: [], success: false });
    try {
      const response = await http.service().get(`/${member}`); 
      set({ loading: false, members: response.data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  DeleteMember: async (member, Id) => {
    set({ loading: true, error: '', members: [], success: false });
    try {
      const response = await http.service().remove(`/${member}/${Id}`); 
      set({ loading: false, members: response.data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  fetchMentor: async (Id) => {
    set({ loading: true, error: '', members: [], success: false });
    try {
      const response = await http.service().get(`/mentors/${Id}`);
      set({ loading: false, members: response.data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  verifyMentor: async (userId) => {
    set({ loading: true, error: '', members: [], success: false });
    try {
      const response = await http.service().update(`/mentors/verify/${userId}`);
      set({ loading: false, members: response.data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  }
}));

export default useMembersStore;
