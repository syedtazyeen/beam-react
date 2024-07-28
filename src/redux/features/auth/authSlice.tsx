import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '@/types';
import { loginAsync } from './authThunks';

interface AuthState {
    user: User | null;
    error: string | null;
    isLoading: boolean;
    token: string | null;
}

const initialState: AuthState = {
    user: null,
    error: null,
    isLoading: false,
    token: localStorage.getItem('jwt-token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        resetCredentials: state => {
            localStorage.removeItem('jwt-token');
            Object.assign(state, initialState);
        },
        resetError: (state) => {
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginAsync.fulfilled, (state, action: PayloadAction<any>) => {
                state.isLoading = false;
                state.token = action.payload;
                //state.user = action.payload.user;
            })
            .addCase(loginAsync.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setCredentials, resetCredentials, resetError } = authSlice.actions;
export const authReducer = authSlice.reducer;
