import { NavigationContainer } from "@react-navigation/native"
import NotAuthenticationRoute from "./NotAuthenticationRoute"
import { SafeAreaView } from "react-native-safe-area-context"
import { Host } from "react-native-portalize"
import AuthorizedRoute from "./AuthorizedRoute"

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} edges={["top", "left", "right"]}>
        <Host>
          <AuthorizedRoute />
        </Host>
      </SafeAreaView>
    </NavigationContainer>
  )
}