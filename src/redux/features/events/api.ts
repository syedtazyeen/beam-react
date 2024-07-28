import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiResponse, Event } from '@/types';
import { API_URL } from '@/config/api.config';
import { PaginationResponse } from '@/types/api/response';

// Retrieve the token from local storage
const getToken = () => localStorage.getItem('jwt-token');

export const eventApi = createApi({
    reducerPath: 'eventApi',
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
        getEvent: builder.query<ApiResponse<Event>, { eventId: string }>({
            query: ({ eventId }) => 'event?eventId=' + eventId,
        }),
        getLiveEvents: builder.query<PaginationResponse<Event>, void>({
            query: () => 'event/live',
        }),
        getOfflineEvents: builder.query<PaginationResponse<Event>, void>({
            query: () => 'event/offline',
        }),
        getTableEventsList: builder.query<ApiResponse<Event>, void>({
            query: () => 'event/studio/list',
        }),
        getStreamEvent: builder.query<ApiResponse<Event>, { eventId: string }>({
            query: ({ eventId }) => 'event/studio/event/now?eventId=' + eventId,
        }),

        //
        postEvent: builder.mutation<ApiResponse<Event>, { event: any }>({
            query: ({ event }) => ({
                url: 'event/studio/create',
                method: 'POST',
                body: event
            })
        }),

        //
        putPublishEvent: builder.mutation<ApiResponse<Event>, { eventId: string }>({
            query: ({ eventId }) => {
                if (!eventId || eventId === '') {
                    throw new Error('Event ID is required');
                }
                return {
                    url: `event/studio/publish?eventId=${eventId}`,
                    method: 'PUT',
                };
            },
        }),
        putUnPublishEvent: builder.mutation<ApiResponse<Event>, { eventId: string }>({
            query: ({ eventId }) => ({
                url: `event/studio/unpublish?eventId=${eventId}`,
                method: 'PUT',
            }),
        }),
    }),
});

export const {
    useGetEventQuery,
    useGetLiveEventsQuery,
    useGetOfflineEventsQuery,
    useGetStreamEventQuery,
    useGetTableEventsListQuery,
    usePostEventMutation,
    usePutPublishEventMutation,
    usePutUnPublishEventMutation
} = eventApi;
