/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  data: any;
  isCityNotFound: boolean;
}

const initialState: WeatherState = {
  data: {},
  isCityNotFound: false,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      console.log(action);
      state.data = action.payload;
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;
export default weatherSlice.reducer;
