import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNavigation } from "../utils/navigation/Navigation"
import LoginScreen from "../screens/login/LoginScreen"
import SingUpScreen from "../screens/sign_up/SignUpScreen"
import AuthorizedRoute from "./AuthorizedRoute"

const { Navigator, Screen } = createNativeStackNavigator<RootNavigation>()

export default function NotAuthenticationRoute() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Login"
    >
      <Screen name="Login" options={{
        animation: "fade_from_bottom",
      }} component={LoginScreen} />
      <Screen name="SignUp"
        options={{
          animation: "fade_from_bottom",
        }}
        component={SingUpScreen} />
      <Screen name="Authorized" component={AuthorizedRoute} />
    </Navigator>
  )
}