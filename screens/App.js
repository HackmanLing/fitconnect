import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native'
import { useFonts } from "expo-font"
import * as NavigationBar from 'expo-navigation-bar'
import { NavigationContainer } from '@react-navigation/native'
import Bold from "./assets/fonts/Bold.ttf"
import Light from "./assets/fonts/Light.ttf"
import Medium from "./assets/fonts/Medium.ttf"
import Regular from "./assets/fonts/Regular.ttf"
import SemiBold from "./assets/fonts/SemiBold.ttf"
import ConItalic from "./assets/fonts/ConItalic.ttf"
import ConLight from "./assets/fonts/ConLight.ttf"
import AppContainer from './appComponent/AppContainer'
import AuthController from './appComponent/AuthController'

export default function App() {
  const [isLoaded] = useFonts({
    Bold,
    Medium,
    Regular,
    SemiBold,
    Light,
    ConItalic,
    ConLight
  })

  if (!isLoaded) {
    return null
  }

  if(Platform.OS === "android") {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor('#fff')
    NavigationBar.setBackgroundColorAsync("#fff")
    NavigationBar.setButtonStyleAsync("dark")
  } else {
    StatusBar.setBarStyle('dark-content')
    StatusBar.setBackgroundColor('#fff')
  }

  return (
    <AppContainer>
      <NavigationContainer>
        <AuthController />
      </NavigationContainer>
    </AppContainer>
  )
}
