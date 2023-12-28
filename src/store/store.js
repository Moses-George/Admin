import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import { userApi } from './api/userApi';
import { memberApi } from './api/memberApi'; 
import { paymentApi } from './api/paymentApi';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [memberApi.reducerPath]: memberApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      authApi.middleware,
      userApi.middleware,
      memberApi.middleware,
      paymentApi.middleware 
    ])
});

export default store;
