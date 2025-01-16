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
import SplashScreen from './src/ui/screens/splash/SplashScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppRoutes from './src/ui/routes/AppRoutes';
import "react-native-gesture-handler"


export default function App() {
  const [isFinishedAnimation, setIsFinishedAnimation] = useState(false)
  const colorsScheme = useColorScheme()
  const themeDefault = colorsScheme == "dark" ? darkTheme : lightTheme

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={themeDefault}>
        {isFinishedAnimation ? <AppRoutes /> : <SplashScreen onAnimationFinish={() => setIsFinishedAnimation(true)} />}
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}