import { AxiosError } from "axios"


export class DataOrException<T> {
  data: T | null
  exception: AxiosError | null
  isLoading: boolean
  constructor(data: T | null, exception: AxiosError | null, isLoading: boolean) {
    this.data = data
    this.exception = exception
    this.isLoading = isLoading
  }
}