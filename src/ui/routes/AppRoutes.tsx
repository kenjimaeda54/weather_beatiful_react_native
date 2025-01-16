import { NavigationContainer } from "@react-navigation/native"
import NotAuthenticationRoute from "./NotAuthenticationRoute"
import { SafeAreaView } from "react-native-safe-area-context"

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <NotAuthenticationRoute />
      </SafeAreaView>
    </NavigationContainer>
  )
}