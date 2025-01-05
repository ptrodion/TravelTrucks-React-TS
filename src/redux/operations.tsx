import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const instance = axios.create({
  baseURL: 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/',
});

export const fetchVehicles = createAsyncThunk(
  'vehicles',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('campers', {});
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue({
          status: error.response?.status || 500,
          message: error.response?.statusText || 'Unknown server error',
        });
      } else {
        return thunkAPI.rejectWithValue({
          status: 0,
          message: 'Network error. Please try again.',
        });
      }
    }
  }
);
