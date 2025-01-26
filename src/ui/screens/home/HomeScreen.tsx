import { Text, View } from "react-native";
import { useTheme } from "styled-components";
import { Container, Name, Temperature, TitleLocation } from "./styleHomeScreen";
import Card from "./view/cad/Card";


export default function HomeScreen() {
  return (
    <Container>
      <View>
        <Name>Ricardo Kenji</Name>
        <TitleLocation>Porto Alegre</TitleLocation>
      </View>
      <Temperature>30°C</Temperature>
      <Card />
    </Container>
  )
}   