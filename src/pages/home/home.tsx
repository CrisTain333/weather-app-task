import Navbar from "@/components/Navbar/Navbar";
import Notfound from "@/components/NotFound/Notfound";
import Overview from "@/components/Overview/Overview";
import { useAppSelector } from "@/redux/hook";

const Home = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  console.log("Data", data);
  console.log("isLoading", isDataLoading);
  console.log("CityNot Found", isCityNotFound);

  // if (!data && isCityNotFound === false) {
  //   <div className="mt-20 space-y-3">
  //     <h2 className="text-5xl text-center font-semibold">
  //       Welcome to the Weather App
  //     </h2>
  //     <p className="text-2xl text-center font-semibold">
  //       Enter a city name to get the weather forecast
  //     </p>
  //   </div>;

  //   return;
  // }
  return (
    <div>
      <Navbar />

      {!isDataLoading && isCityNotFound ? (
        <>
          <Notfound />
        </>
      ) : (
        <>
          {/* Main Content */}
          <main>
            <h1 className="text-3xl font-medium my-8">
              Today Overview
            </h1>

            <Overview data={data} />
          </main>
        </>
      )}
    </div>
  );
};

export default Home;
