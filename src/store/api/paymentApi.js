import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const paymentApi = createApi({
  reducerPath: 'paymentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dashboard-m5qj.onrender.com'
  }),
  tagTypes: ['Payments'],
  endpoints: (builder) => ({
    getPayment: builder.query({
      query(Id) {
        return {
          url: `/payments/${Id}`
          //   credentials: 'include'
        };
      },
      providesTags: (result, error, id) => [{ type: 'Payments', id }]
    }),
    getAllPayments: builder.query({
      query() {
        return {
          url: '/payments'
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Payments', id: 'LIST' }]
    }),
    deletePayment: builder.mutation({
      query(Id) {
        return {
          url: `/payments/${Id}`,
          method: 'DELETE'
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Payments', id: 'LIST' }]
    })
  })
});

export const { useGetPaymentQuery, useGetAllPaymentsQuery, useDeletePaymentMutation } = paymentApi;
