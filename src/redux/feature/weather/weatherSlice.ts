/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  data: any | null;
  isCityNotFound: boolean;
  isDataLoading: boolean;
}

const initialState: WeatherState = {
  data: null,
  isCityNotFound: false,
  isDataLoading: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      console.log(action);
      state.data = action.payload;
    },
    changeLoadingState: (
      state,
      action: PayloadAction<boolean>
    ) => {
      console.log(action);
      state.isDataLoading = action.payload;
    },
  },
});

export const { setWeatherData, changeLoadingState } =
  weatherSlice.actions;
export default weatherSlice.reducer;
