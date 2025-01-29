import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, Name, Temperature, TitleLocation } from "./styleHomeScreen";
import Card from "./view/cad/Card";
import { useHomeViewModel } from "../../view-model/home-view-model/useHomeViewModel";
import { useEffect } from "react";
import React from "react";


export default function HomeScreen() {
  const { getWeatherForecast, weatherForecast } = useHomeViewModel()


  useEffect(() => {
    getWeatherForecast()
  }, [])



  return (

    <Container>
      {
        weatherForecast.isLoading && <Text>Loading</Text>

      }
      {
        weatherForecast.data && <Data />
      }
      {
        weatherForecast.exception && <Text>error</Text>
      }
    </Container>
  )

}


export const Data = () => {
  return (
    <>
      <View>
        <Name>Ricardo Kenji</Name>
        <TitleLocation>Porto Alegre</TitleLocation>
      </View>
      <Temperature>30°C</Temperature>
      <Card />

    </>

  )
}