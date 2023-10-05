import Navbar from "@/components/Navbar/Navbar";
import Notfound from "@/components/NotFound/Notfound";
import Overview from "@/components/Overview/Overview";
import { useAppSelector } from "@/redux/hook";

const Home = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  const welcomeMessage = "Welcome to the Weather App";
  const enterCityMessage =
    "Enter a city name to get the weather forecast";

  return (
    <div>
      <Navbar />
      {data === null &&
      !isCityNotFound &&
      !isDataLoading ? (
        <>
          <div className="mt-20 space-y-3">
            <h2 className="text-5xl text-center font-semibold">
              {welcomeMessage}
            </h2>
            <p className="text-2xl text-center font-semibold">
              {enterCityMessage}
            </p>
          </div>
        </>
      ) : !isDataLoading && isCityNotFound ? (
        <>
          <Notfound />
        </>
      ) : (
        <>
          <main>
            <h1 className="text-3xl font-medium my-8">
              Today Overview
            </h1>
            <Overview
              data={data}
              isDataLoading={isDataLoading}
            />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
