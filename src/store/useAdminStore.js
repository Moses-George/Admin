import { create } from 'zustand';
import { http } from '../lib/http.service';

const initialState = {
  data: [],
  admin: {},
  loading: false,
  success: false,
  error: ''
};

const useAdminStore = create((set) => ({
  data: initialState.data,
  admin: initialState.admin,
  loading: initialState.loading,
  error: initialState.error,
  success: initialState.success,

  resetState: () => {
    set({ loading: false, error: '', success: false });
  },

  resetDataState: () => {
    set({ data: [] });
  },

  updateAdminState: (data) => { 
    set({ data: data });  
  },

  fetchAdmins: async () => {
    // set({ load error: '', data: [], success: false });
    try {
      const response = await http.service().get('/users');
      set({ data: response?.data, error: '' });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  fetchSingleAdmin: async (token) => {
    set({ loading: true, error: '', data: [], success: false });
    try {
      const response = await http.service().get(`/users/${token}`);
      set({ loading: false, admin: response?.data[0], error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  DeleteAdmin: async (userId) => {
    set({ loading: true, error: '', data: [], success: false });
    try {
      const response = await http.service().remove(`/users/${userId}`);
      set({ loading: false, data: response?.data, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  registerNewAdmin: async (admin) => {
    set({ loading: true, error: '', data: {}, success: false });
    try {
      const response = await http.service().push('/users/register', admin);
      set({ loading: false, data: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  logInAdmin: async (admin) => {
    set({ loading: true, error: '', data: {}, success: false });
    try {
      const response = await http.service().push('/users/login', admin);
      if (response?.token) {
        localStorage.setItem('accessToken', response?.token);
      }
      set({ loading: false, data: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  updatePassword: async (token, payload) => {
    set({ loading: true, error: '', data: {}, success: false });
    try {
      const response = await http.service().update(`/users/updatepassword/${token}`, payload);
      set({ loading: false, data: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  },

  resetPassword: async (payload) => {
    set({ loading: true, error: '', data: {}, success: false });
    try {
      const response = await http.service().push('/users/resetpassword/', payload);
      set({ loading: false, data: response, error: '', success: true });
    } catch (error) {
      set({ loading: false, error: error?.message });
    }
  }
}));

export default useAdminStore;
