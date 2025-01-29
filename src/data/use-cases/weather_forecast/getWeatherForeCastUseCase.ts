import { WeatherForecast } from "../../../domain/entities/weather_forecast/WeatherForecast";
import { WeatherForecastRepository } from "../../../domain/repositories/weather_forecast/WeatherForecastRepository";
import { DataOrException } from "../../utils/DataOrException";


export const getWeatherForecastUseCase = (weatherRepository: WeatherForecastRepository): Promise<DataOrException<WeatherForecast>> =>
  weatherRepository.getWeatherForecast()
