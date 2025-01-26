import { FlatList, View } from "react-native";
import { Container, StatusTemperatureYesterday, Temperature, Title, TitleYesterday, YesterdayCard } from "./styleCard";
import { useTheme } from "styled-components";


export default function Card() {
  const { colors } = useTheme()
  const data = ["1343", "34344", "1343fs", "1343pps", "1343oer", "1343'ls", "1343sf"]

  return (
    <Container>
      <Title>Historico</Title>
      <FlatList
        data={data}
        contentContainerStyle={{
          flexDirection: "row",
          flexWrap: "wrap",
          gap: 10,
        }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (

          <Temperature>{item}</Temperature>
        )}
      />
      <View
        style={{
          shadowColor: colors.primary,
          shadowOffset: {
            width: -1,
            height: 2,
          },
          shadowOpacity: 1,
          shadowRadius: 2,
          elevation: 4
        }}
      >
        <YesterdayCard>
          <TitleYesterday>Ontem</TitleYesterday>
          <StatusTemperatureYesterday>25°C</StatusTemperatureYesterday>
        </YesterdayCard>
      </View>
    </Container>
  )
}