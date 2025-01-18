import { NavigatorScreenParams } from "@react-navigation/native"


export type RootNavigation = {
  Login: undefined
  SignUp: undefined
  Authorized: NavigatorScreenParams<AuthorizedNavigation>
}

export type AuthorizedNavigation = {
  Home: undefined
  Profile: undefined
  Search: undefined

}