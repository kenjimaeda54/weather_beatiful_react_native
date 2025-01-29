import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { AuthorizedNavigation } from "../utils/navigation/Navigation"
import HomeScreen from "../screens/home/HomeScreen"
import ProfileScreen from "../screens/profile/ProfileScreen"
import SearchScreen from "../screens/search/SearchScreen"
import IconFontAwesome6 from "@react-native-vector-icons/fontawesome6"
import IconFontAwesome from "@react-native-vector-icons/fontawesome5"
import { useTheme } from "styled-components"


const { Navigator, Screen } = createBottomTabNavigator<AuthorizedNavigation>()

export default function AuthorizedRoute() {
  const { colors } = useTheme()
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: "transparent"
        },
        tabBarLabelStyle: {
          display: "none"
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.gray
      }}
      initialRouteName="Home"
    >
      <Screen options={{
        tabBarIcon: ({ color, size }) => <IconFontAwesome6 name="house" color={color} size={size} iconStyle="solid" />
      }} name="Home" component={HomeScreen} />
      <Screen name="Search"
        options={{
          tabBarIcon: ({ color, size }) => <IconFontAwesome name="search" color={color} size={size} iconStyle="solid" />
        }}
        component={SearchScreen} />
      <Screen name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => <IconFontAwesome name="user" color={color} size={size} iconStyle="solid" />
        }}
        component={ProfileScreen} />
    </Navigator>
  )
}