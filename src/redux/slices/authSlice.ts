import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { saveToken } from '../../utils/storage';
import api from '../../api/axiosClient';

interface AuthState {
  token: string | null;
  loading: boolean;
  error?: string | null;
}

const initialState: AuthState = { token: null, loading: false, error: null };

export const login = createAsyncThunk(
  'auth/login',
  async (payload: { email: string; password: string }) => {
    const res = await api.post('/auth/login', payload);
    const token = res.data?.token;
    if (token) await saveToken(token);
    return token;
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  await saveToken(undefined);
});

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string | null>) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (s) => {
        s.loading = true;
        s.error = null;
      })
      .addCase(login.fulfilled, (s, a) => {
        s.token = a.payload ?? null;
        s.loading = false;
      })
      .addCase(login.rejected, (s, a) => {
        s.loading = false;
        s.error = a.error.message;
      })
      .addCase(logout.fulfilled, (s) => {
        s.token = null;
      });
  },
});

export const { setToken } = slice.actions;
export default slice.reducer;
