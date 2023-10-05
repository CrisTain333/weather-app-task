import { api } from "../../api/api";

export const weatherApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (searchData: string) => ({
        url: `/forecast.json?key=3436bb7afbe84d7b896133850230410&q=${searchData}&days=7&aqi=yes&alerts=yes`,
      }),
    }),
  }),
});

export const { useGetWeatherQuery } = weatherApi;
