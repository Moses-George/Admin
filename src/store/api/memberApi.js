import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../lib/baseUrl';

export const memberApi = createApi({
  reducerPath: 'memberApi',
  baseQuery: fetchBaseQuery({
    baseUrl
  }),
  tagTypes: ['Members'],
  endpoints: (builder) => ({
    getMentor: builder.query({
      query(Id) {
        return {
          url: `/mentors/${Id}`
          //   credentials: 'include'
        };
      },
      providesTags: (result, error, id) => [{ type: 'Members', id }]
    }),
    getAllMembers: builder.query({
      query(member) {
        return {
          url: `/${member}`
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Members', id: 'LIST' }]
    }),
    deleteMember: builder.mutation({
      query({ member, Id }) {
        return {
          url: `/${member}/${Id}`,
          method: 'DELETE'
          //   credentials: 'include'
        };
      },
      invalidatesTags: [{ type: 'Members', id: 'LIST' }]
    }),
    verifyMentor: builder.mutation({
      query(Id) {
        return {
          url: `/mentors/verify/${Id}`,
          method: 'PUT'
          // credentials: 'include',
          // body: payload
        };
      },
      invalidatesTags: [{ type: 'Members', id: 'LIST' }]
    }),
    updateMentorPrice: builder.mutation({
      query({ Id, payload }) {
        return {
          url: `/mentors/update-price/${Id}`,
          method: 'PUT',
          // credentials: 'include',
          body: payload
        };
      },
      // invalidatesTags: [{ type: 'Members', id: 'LIST' }]
    })
  })
});

export const {
  useGetMentorQuery,
  useGetAllMembersQuery,
  useDeleteMemberMutation,
  useVerifyMentorMutation,
  useUpdateMentorPriceMutation
} = memberApi;
