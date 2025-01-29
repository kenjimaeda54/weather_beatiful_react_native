import { DataOrException } from "../../../data/utils/DataOrException";
import { WeatherForecast } from "../../entities/weather_forecast/WeatherForecast";


export interface WeatherForecastRepository {
  getWeatherForecast(): Promise<DataOrException<WeatherForecast>>
}