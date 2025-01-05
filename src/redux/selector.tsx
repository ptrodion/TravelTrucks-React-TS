import { RootState } from './store';

export const selectListOfVehicles = (state: RootState) =>
  state.vehicles.listOfVehicles;
export const selectIsLoading = (state: RootState) => state.vehicles.isLoading;
export const selectError = (state: RootState) => state.vehicles.error;
