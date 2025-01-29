import { AxiosError } from "axios"
import { WeatherForecast } from "../../../domain/entities/weather_forecast/WeatherForecast"
import { WeatherForecastRepository } from "../../../domain/repositories/weather_forecast/WeatherForecastRepository"
import { DataOrException } from "../../utils/DataOrException"
import { api } from "../../../infra/http/api"


export class WeatherForecastRepositoryImpl implements WeatherForecastRepository {
  async getWeatherForecast(): Promise<DataOrException<WeatherForecast>> {
    try {
      const response = await api.get<WeatherForecast>(`/forecast.json?q=Pouso%20Alegre&lang=pt&key=8a94bb22daee4ee19b2195509241512&days=7&dt=2025-01-262025-01-272025-01-28`)
      return new DataOrException<WeatherForecast>(response.data, null, false)
    } catch (error) {
      const errorAxios = error as AxiosError
      return new DataOrException<WeatherForecast>(null, errorAxios, false)
    }
  }
}