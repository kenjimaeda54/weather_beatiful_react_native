import 'styled-components'
import { darkTheme } from "../ui/theme/theme"

declare module 'styled-components' {
  type ThemeTypes = typeof darkTheme
  export interface DefaultTheme extends ThemeTypes { }
}