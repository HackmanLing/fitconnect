import { View, Text, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import OnboardingStyle from '../stylesheet/OnboardingStyle'


const OnboardingItem = ({item}) => {
  const { width } = useWindowDimensions()

  return (
    <View style={{...OnboardingStyle.inContainer, width}}>
      <Image source={ item.image } style={{...OnboardingStyle.image, resizeMode: 'center', height: 200}} />
      <View style={{ flex: 0.3}}>
        <Text style={{...OnboardingStyle.title, marginTop: 50}}>{item.title}</Text>
        <Text style={{...OnboardingStyle.description, marginTop:5}}>{item.description}</Text>
      </View>
    </View>
  )
}

export default OnboardingItem