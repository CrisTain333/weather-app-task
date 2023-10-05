/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Cloud } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { getWeather } from "@/api";
import { ToastAction } from "@radix-ui/react-toast";
import {
  useAppDispatch,
  // useAppSelector,
} from "@/redux/hook";
import {
  changeLoadingState,
  setIsCityNotFound,
  setWeatherData,
} from "@/redux/feature/weather/weatherSlice";
import TemperatureUnitChanger from "../TemperatureUnitChanger/TemperatureUnitChanger";

const Navbar = () => {
  const [inputValue, setInputValue] =
    React.useState<string>();

  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);

  const { toast } = useToast();
  const dispatch = useAppDispatch();

  //Search Function
  const handleSearch = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(changeLoadingState(true));
    dispatch(setIsCityNotFound(false));
    // ** Validate input so user can't search without value

    if (inputValue === undefined || inputValue === "") {
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Please enter city Name",
        description:
          "There was a problem with your request.",
      });
      setIsLoading(false);
      dispatch(changeLoadingState(false));
      return;
    }

    try {
      const data = await getWeather(inputValue);
      // * Handle Error first
      if (
        data?.error &&
        data?.error?.response?.data?.error?.code === 1006
      ) {
        toast({
          duration: 2000,
          variant: "destructive",
          title:
            data?.error?.response?.data?.error?.message,
          description: "Please Enter a Valid City",
          action: (
            <ToastAction
              altText="Try again"
              onClick={() => {
                setInputValue("");
              }}
            >
              Try again
            </ToastAction>
          ),
        });
        setIsLoading(false);
        dispatch(changeLoadingState(false));
        dispatch(setIsCityNotFound(true));
        return;
      }
      // Set data to store and other loading state false
      setIsLoading(false);
      dispatch(setWeatherData(data));
      dispatch(changeLoadingState(false));
      dispatch(setIsCityNotFound(false));
    } catch (error) {
      setIsLoading(false);
      dispatch(changeLoadingState(false));
      toast({
        duration: 2000,
        variant: "destructive",
        title: "Internal Error",
        description:
          "There was a problem with server , we are working on it. Please try again later",
        action: (
          <ToastAction altText="Try again">
            Try again
          </ToastAction>
        ),
      });
    }
  };

  return (
    <div>
      <nav>
        {/* left side */}
        <div className="flex justify-between my-2">
          <div>
            <form
              onSubmit={handleSearch}
              className="flex items-center"
            >
              <Input
                value={inputValue}
                onChange={(e) =>
                  setInputValue(e.target.value)
                }
                placeholder="Enter city"
                className="w-[30vw]"
              />

              <Button
                className="ml-3"
                // onClick={handleSearch}
                type="submit"
                disabled={isLoading}
              >
                Search
              </Button>
            </form>
          </div>
          <div className="flex items-center px-2  rounded-md">
            <TemperatureUnitChanger />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
