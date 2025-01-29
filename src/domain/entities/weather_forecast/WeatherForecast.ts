import { Forecast } from "./Forecast";
import { WeatherCurrent } from "./WeatherCurrent";

export interface WeatherForecast {
  current: WeatherCurrent;
  forecast: Forecast[]
}