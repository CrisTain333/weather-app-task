/* eslint-disable @typescript-eslint/no-explicit-any */
import { TemperatureUnitEnums } from "@/enums/temperaturUnit";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WeatherState {
  data: any | null;
  isCityNotFound: boolean;
  isDataLoading: boolean;
  temperatureUnit: string;
}

const initialState: WeatherState = {
  data: null,
  isCityNotFound: false,
  isDataLoading: false,
  temperatureUnit: TemperatureUnitEnums.Celsius,
};

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setWeatherData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    changeLoadingState: (
      state,
      action: PayloadAction<boolean>
    ) => {
      console.log(action);
      state.isDataLoading = action.payload;
    },
    setIsCityNotFound: (
      state,
      action: PayloadAction<boolean>
    ) => {
      console.log(action);
      state.isCityNotFound = action.payload;
    },
    changeTemperatureUnit: (
      state,
      action: PayloadAction<
        | TemperatureUnitEnums.Celsius
        | TemperatureUnitEnums.Fahrenheit
      >
    ) => {
      state.temperatureUnit = action.payload;
    },
  },
});

export const {
  setWeatherData,
  changeLoadingState,
  changeTemperatureUnit,
  setIsCityNotFound,
} = weatherSlice.actions;
export default weatherSlice.reducer;
