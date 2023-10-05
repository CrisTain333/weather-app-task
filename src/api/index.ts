/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/lib/axios";

export const getWeather = async (queryData: string) => {
  try {
    // !! Don't Use Private Key Open Like This. I am using the key without env just for demo purposes
    const response = await axiosInstance.get(
      `/forecast.json?key=3436bb7afbe84d7b896133850230410&q=${queryData}&days=7&aqi=yes&alerts=yes`
    );
    return response?.data;
  } catch (error: any) {
    // throw new Error(e?.response?.data?.message);
    return { error };
  }
};
