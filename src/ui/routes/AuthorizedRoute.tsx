import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AuthorizedNavigation } from "../../utils/navigation/Navigation"
import HomeScreen from "../screens/home/HomeScreen"
import ProfileScreen from "../screens/profile/ProfileScreen"
import SearchScreen from "../screens/search/SearchScreen"

const { Navigator, Screen } = createBottomTabNavigator<AuthorizedNavigation>()

export default function AuthorizedRoute() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Profile" component={ProfileScreen} />
      <Screen name="Search" component={SearchScreen} />
    </Navigator>
  )
}