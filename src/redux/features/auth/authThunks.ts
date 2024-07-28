import { API_URL } from "@/config/api.config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export interface LoginCredentials {
    email: string;
    password: string;
}
export interface RegisterCredentials {
    username: string
    email: string;
    password: string;
}

export const loginAsync = createAsyncThunk<{}, LoginCredentials, { rejectValue: string }>(
    'auth/login',
    async (credentials: LoginCredentials, { rejectWithValue }: any) => {
        try {
            const response = await fetch(API_URL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorData = await response.json();
                localStorage.removeItem('jwt-token')

                return rejectWithValue(errorData.errorMessage || 'Failed to login');
            }

            const data = await response.json();
            localStorage.setItem('jwt-token', data.data[0].accessToken)
            return data.data[0].accessToken;
        } catch (error) {
            localStorage.removeItem('jwt-token')
            return rejectWithValue("Something went wrong");
        }
    }
)

export const registerAsync = createAsyncThunk<{}, RegisterCredentials, { rejectValue: string }>(
    'auth/register',
    async (credentials: RegisterCredentials, { rejectWithValue }: any) => {
        try {
            const response = await fetch(API_URL + '/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                const errorData = await response.json();
                localStorage.removeItem('jwt-token')

                return rejectWithValue(errorData.errorMessage || 'Failed to register');
            }

            const data = await response.json();
            localStorage.setItem('jwt-token', data.data[0].accessToken)
            return data.data[0].accessToken;
        } catch (error) {
            localStorage.removeItem('jwt-token')
            return rejectWithValue("Something went wrong");
        }
    }
)