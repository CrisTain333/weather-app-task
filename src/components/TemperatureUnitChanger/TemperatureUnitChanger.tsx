import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppSelector } from "@/redux/hook";
import { TemperatureUnitEnums } from "@/enums/temperaturUnit";

const TemperatureUnitChanger = () => {
  const { temperatureUnit } = useAppSelector(
    (state) => state.weather
  );
  return (
    <div>
      <Select onValueChange={(v) => console.log(v)}>
        <SelectTrigger className="w-[70px]">
          <SelectValue
            placeholder={`${
              temperatureUnit ===
              TemperatureUnitEnums.Celsius
                ? `C °`
                : "F °"
            }`}
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Celsius">C °</SelectItem>
          <SelectItem value="Fahrenheit">F °</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default TemperatureUnitChanger;
