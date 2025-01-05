import { createSlice } from '@reduxjs/toolkit';
import { fetchVehicles } from './operations';

const INITIAL_STATE = {
  listOfVehicles: [],
  isLoading: false,
  error: null as string | null,
};

const vehiclesSlice = createSlice({
  name: 'vehicles',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.listOfVehicles = action.payload.items;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || null;
      });
  },
});

export default vehiclesSlice.reducer;
