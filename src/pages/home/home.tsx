import Navbar from "@/components/Navbar/Navbar";
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
    </div>
  );
};

export default Home;
