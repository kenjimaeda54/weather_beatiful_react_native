/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './src/ui/theme/theme';
import LoginScreen from './src/ui/screens/login/LoginScreen';


export default function App() {
  const colorsScheme = useColorScheme()
  const themeDefault = colorsScheme == "dark" ? darkTheme : lightTheme
  return (
    <ThemeProvider theme={themeDefault}>
      <LoginScreen />
    </ThemeProvider>
  )
}