import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useAppDispatch,
  useAppSelector,
} from "@/redux/hook";
import { TemperatureUnitEnums } from "@/enums/temperaturUnit";
import { changeTemperatureUnit } from "@/redux/feature/weather/weatherSlice";

const TemperatureUnitChanger = () => {
  const { temperatureUnit } = useAppSelector(
    (state) => state.weather
  );

  const dispatch = useAppDispatch();
  return (
    <div>
      <Select
        onValueChange={(
          value:
            | TemperatureUnitEnums.Celsius
            | TemperatureUnitEnums.Fahrenheit
        ) => dispatch(changeTemperatureUnit(value))}
      >
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
