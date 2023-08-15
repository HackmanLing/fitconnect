import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginCheck from '../screens/LoginCheck'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/authenticate/LoginScreen'
import RegisterScreen from '../screens/authenticate/RegisterScreen'
import VerificationScreen from '../screens/authenticate/VerificationScreen'


const Stack = createNativeStackNavigator()

const LoginContainer = () => {
  return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Welcome'>
			<Stack.Screen name="checkLogged" component={LoginCheck} options={{ headerShown: false }} />
			<Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
			<Stack.Screen name="Verification" component={VerificationScreen} options={{ headerShown: false }} />
			{/* <Stack.Screen name="Rules" component={RulesScreen} options={{ headerShown: false }} /> */}
			{/* <Stack.Screen name="Interests" component={InterestScreen} options={{ headerShown: false }} /> */}
		</Stack.Navigator>
	)
}

export default LoginContainer
