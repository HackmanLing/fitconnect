import { Feather as Icon, Ionicons as IIcons, MaterialCommunityIcons as MCIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Platform, StatusBar } from 'react-native'
import * as NavigationBar from 'expo-navigation-bar'
import DashboardScreen from '../screens/account/DashboardScreen'
import SettingScreen from '../screens/account/SettingScreen'
import PostNavigation from './navigations/PostNavigation'
import CategoryNavigation from './navigations/CategoryNavigation'
import { font } from '../helpers/fixedData'
import StoreScreen from '../screens/account/StoreScreen'
import { useAppContainer } from './AppContainer'
import { useIsFocused } from '@react-navigation/native'


const Tab = createBottomTabNavigator();

const HomeContainer = () => {
  const { stopPlaying, startPlaying } = useAppContainer();
  const [vendor, setVendor] = useState(true);


  return (
    <Tab.Navigator
     screenOptions={{ 
      tabBarActiveTintColor: "#0275d8",
      tabBarInactiveTintColor: "#aaa",
      tabBarStyle: {
        backgroundColor: "#FFFFFF",
        position: "absolute",
        padding: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingBottom: 5,
        bottom: 0,
        height: 60,
        borderRadius: 0,
        shadowColor: "#393939",
        shadowOffset: {
          height: -2,
          width: 3,
        },
        shadowOpacity: 0.09,
        shadowRadius: 1,
        elevation: 2
      }
     }}
    >
    <Tab.Screen
      name="Dashboard"
      component={DashboardScreen} 
      options={{ 
        tabBarLabelStyle: {...font.bold},
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MCIcons name="view-dashboard" color={color} size={22} style={{paddingBottom: Platform.OS == 'ios' ? 25 : 0}}/>
      ),
    }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault
          stopPlaying()
        },
      })}
      />
      <Tab.Screen
       name="Clubs"
       component={CategoryNavigation} 
       options={{ 
        tabBarLabelStyle: {...font.bold},
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MCIcons name="account-multiple-outline" color={color} size={24} style={{paddingBottom: Platform.OS == 'ios' ? 25 : 0}}/>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault
          stopPlaying()
        },
      })}
      />
      {vendor && (<Tab.Screen
       name="Explore"
       component={PostNavigation} 
       options={{ 
        tabBarLabelStyle: {...font.bold},
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MCIcons name="compass-outline" color={color} size={24} style={{paddingBottom: Platform.OS == 'ios' ? 25 : 0}}/>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault
          startPlaying()
        },
      })}
      />)}
      <Tab.Screen
       name="Store"
       component={StoreScreen} 
       options={{ 
        tabBarLabelStyle: {...font.bold},
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MCIcons name="shopping" color={color} size={22} style={{paddingBottom: Platform.OS == 'ios' ? 25 : 0}}/>
        ),
      }}
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault
          stopPlaying()
        },
      })}
      />
      
      <Tab.Screen name="Profile" 
      component={SettingScreen} 
      options={{ 
        tabBarLabelStyle: {...font.bold},
        headerShown: false,
        tabBarIcon: ({ color }) => (
          <MCIcons name="cog-outline" color={color} size={22} style={{paddingBottom: Platform.OS == 'ios' ? 25 : 0}}/>
        ),
      }} 
      listeners={({ navigation, route }) => ({
        tabPress: (e) => {
          e.preventDefault
          stopPlaying()
        },
      })}
      />
    </Tab.Navigator>
  )
}

export default HomeContainer