import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './features/auth/authSlice';
import { eventApi } from './features/events/api';
import { profileApi } from './features/profile/api';
import { authApi } from './features/auth/api';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        [eventApi.reducerPath]: eventApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            authApi.middleware,
            eventApi.middleware,
            profileApi.middleware,
        ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
