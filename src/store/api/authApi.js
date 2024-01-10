import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 
import { baseUrl } from "../../lib/baseUrl";

export const authApi = createApi({
    reducerPath: 'authApi', 
    baseQuery: fetchBaseQuery({
        baseUrl 
    }),
    tagTypes: ['Auth'], 
    endpoints: (builder) => ({
        signupUser: builder.mutation({
            query(credentials) { 
                return {
                    url: '/users/register',
                    method: 'POST',
                    // credentials: 'include',
                    body: credentials ,
                }; 
            },
            invalidatesTags: [{ type: 'Auth', id: 'LIST' }],  
        }),
        signInUser: builder.mutation({
            query(credentials) { 
                return {
                    url: '/users/login',
                    method: 'POST',
                    body: credentials ,
                }; 
            },
            invalidatesTags: [{ type: 'Auth', id: 'LIST' }],  
        }),
    }),
});


export const { useSignupUserMutation, useSignInUserMutation } = authApi ;  