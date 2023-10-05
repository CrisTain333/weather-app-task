import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./feature/weather/weatherSlice";
import { api } from "./api/api";
export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    weather: weatherReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
