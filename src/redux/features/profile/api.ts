import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, User } from '@/types';
import { API_URL } from '@/config/api.config';

// Retrieve the token from local storage
const getToken = () => localStorage.getItem('jwt-token');

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            const token = getToken();
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        getMyProfile: builder.query<ApiResponse<User>, void>({
            query: () => 'profile/me',
        }),
        getCreatorProfile: builder.query<ApiResponse<User>, { userId: string }>({
            query: ({ userId }) => 'profile/getOne?id=' + userId,
        }),
        getMyLiveEvent: builder.query<ApiResponse<{ liveId: string }>, void>({
            query: () => 'event/studio/current-live',
        }),
        getStreamKey: builder.query<ApiResponse<{ streamKey: string }>, void>({
            query: () => 'profile/streamKey',
        }),
    }),
});

export const {
    useGetMyLiveEventQuery,
    useGetCreatorProfileQuery,
    useGetMyProfileQuery,
    useGetStreamKeyQuery
} = profileApi;
