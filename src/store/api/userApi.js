import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dashboard-m5qj.onrender.com'
  }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    updateUserPassword: builder.mutation({
      query({ token, payload }) {
        return {
          url: `/users/updatepassword/${token}`,
          method: 'PUT',
          credentials: 'include',
          body: payload
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }]
    }),
    resetUserPassword: builder.mutation({
      query(payload) {
        return {
          url: `/users/resetpassword`,
          method: 'POST',
        //   credentials: 'include',
          body: payload
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }]
    }),
    verifyUser: builder.mutation({
        query(Id) {
          return { 
            url: `/users/verify/${Id}`,
            method: 'PUT',
            // credentials: 'include',
            // body: payload
          };
        },
        invalidatesTags: [{ type: 'Users', id: 'LIST' }]
      }),
      updateUserProfileData: builder.mutation({
        query({token, payload}) {
          return { 
            url: `/users/${token}`,
            method: 'PUT',
            // credentials: 'include',
            body: payload
          };
        },
        invalidatesTags: [{ type: 'Users', id: 'LIST' }]
      }),
      uploadUserAvatar: builder.mutation({
        query({token, payload}) {
          return { 
            url: `/users/upload/${token}`,
            method: 'PUT',
            // credentials: 'include',
            body: payload
          };
        },
        invalidatesTags: [{ type: 'Users', id: 'LIST' }]
      }),
    getUser: builder.query({
      query(token) {
        return {
          url: `users/${token}`,
        //   credentials: 'include'
        };
      },
      providesTags: (result, error, id) => [{ type: 'Users', id }]
    }),
    getAllUsers: builder.query({
      query() {
        return {
          url: '/users',
        //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }]
    }),
    deleteUser: builder.mutation({
      query(userId) {
        return {
          url: `/users/${userId}`,
          method: 'DELETE',
        //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Users', id: 'LIST' }]
    })
  })
});

export const {
  useUpdateUserPasswordMutation,
  useResetUserPasswordMutation,
  useDeleteUserMutation,
  useGetAllUsersQuery,
  useGetUserQuery,
  useVerifyUserMutation,
  useUpdateUserProfileDataMutation,
  useUploadUserAvatarMutation 
} = userApi;
