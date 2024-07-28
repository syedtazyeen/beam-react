import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse } from '@/types';
import { API_URL } from '@/config/api.config';
import { RegisterCredentials } from './authThunks';

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
    }),
    endpoints: (builder) => ({
        postRegisterRequest: builder.mutation<ApiResponse<any>, RegisterCredentials>({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
    }),
});

export const {
    usePostRegisterRequestMutation
} = authApi;
