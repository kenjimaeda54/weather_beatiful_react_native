import { useState } from "react"
import { WeatherForecast } from "../../../domain/entities/weather_forecast/WeatherForecast"
import { DataOrException } from "../../../data/utils/DataOrException"
import { getWeatherForecastUseCase } from "../../../data/use-cases/weather_forecast/getWeatherForeCastUseCase"
import { WeatherForecastRepositoryImpl } from "../../../data/repositories/weather_forecast/WeatherForecastRepositoryImpl"

interface IUseHomeViewModel {
  weatherForecast: DataOrException<WeatherForecast>
  getWeatherForecast(): void
}

export const useHomeViewModel = (): IUseHomeViewModel => {
  const [weatherForecast, setWeatherForecast] = useState<DataOrException<WeatherForecast>>(new DataOrException<WeatherForecast>(
    null,
    null,
    true
  ))
  const repository = new WeatherForecastRepositoryImpl()


  async function getWeatherForecast() {
    const weather = await getWeatherForecastUseCase(repository)
    setWeatherForecast(weather)
  }


  return {
    weatherForecast,
    getWeatherForecast
  }

}