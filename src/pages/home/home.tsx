import Navbar from "@/components/Navbar/Navbar";
import Overview from "@/components/Overview/Overview";
import { useAppSelector } from "@/redux/hook";

const Home = () => {
  const { data, isCityNotFound, isDataLoading } =
    useAppSelector((state) => state.weather);

  console.log("Data", data);
  console.log("isLoading", isDataLoading);
  console.log("CityNot Found", isCityNotFound);
  return (
    <div>
      <Navbar />

      {/* Main Content */}
      <main>
        <h1 className="text-3xl font-medium my-8">
          Today Overview
        </h1>

        <Overview data={data} />
      </main>
    </div>
  );
};

export default Home;
