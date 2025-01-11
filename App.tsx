/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './src/ui/theme/theme';
import LoginScreen from './src/ui/screens/login/LoginScreen';
import SplashScreen from './src/ui/screens/splash/SplashScreen';
import SingUpScreen from './src/ui/screens/singup/SignUpScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  const [isFinishedAnimation, setIsFinishedAnimation] = useState(false)
  const colorsScheme = useColorScheme()
  const themeDefault = colorsScheme == "dark" ? darkTheme : lightTheme

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={themeDefault}>
        {isFinishedAnimation ? <SingUpScreen /> : <SplashScreen onAnimationFinish={() => setIsFinishedAnimation(true)} />}
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}