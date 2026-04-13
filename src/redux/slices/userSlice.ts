/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { APIS } from '../../api/endpoints';
import { fetch } from '../../api/axiosInstance';
import { SLICE } from '../../utils/constant';
import { UserSliceState } from '../../types/user.type';

const initialState: UserSliceState = {
  details: null,
  programs: [],
};

const userSlice = createSlice({
  name: SLICE.USER,
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.details = action.payload;
    },
  },
  extraReducers: () => {},
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;

export const introspectCall = createAsyncThunk(
  'user/introspectCall',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await fetch(APIS.INTROSPECT);
      console.log('introspectCalldata', data);

      const updatedData = {
        ...data,
      };
      dispatch(updateUser(updatedData));
      return updatedData;
    } catch (err: any) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response?.data || 'Token refresh failed');
    }
  },
);
