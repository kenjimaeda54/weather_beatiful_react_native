import { Text, View } from "react-native";
import { useTheme } from "styled-components";


export default function LoginScreen() {
  const theme = useTheme()

  return (
    <View style={{ backgroundColor: theme.colors.primary, flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ color: theme.colors.secondary, fontSize: 30, fontFamily: theme.fonts.latoLightItalic }}>Ola login</Text>
    </View>
  )
}