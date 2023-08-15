import { View, Text, Animated, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import Paginator from '../component/Paginator';
import OnboardingItem from '../component/OnboardingItem';
import OnboardingStyle from '../stylesheet/OnboardingStyle';
import { Feather as Icon, MaterialIcons as MIcon } from '@expo/vector-icons'
import { Slides } from '../helpers/fixedData'

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null)
  const [btnText, setBTNText] = useState("Continue")

  const viewableItemsChanged = useRef(({ viewableItems}) =>{
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if(currentIndex < Slides.length - 1){
      slideRef.current.scrollToIndex({ index: currentIndex + 1 })
    }else{
      navigation.navigate('Register')
    }
  }

  useEffect(()=>{
    if(currentIndex < Slides.length - 1) {
      setBTNText("Continue")
    } else {
      setBTNText("Register")
    }
  },[currentIndex])


  return (
    <View style={OnboardingStyle.container}>
      <View style={{flex: 3}}>
        <FlatList data={Slides} renderItem={({item}) => <OnboardingItem item={item} /> }
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={(item)=> item.id}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
          scrollEventThrottle={32}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slideRef}
        />
      </View>

      <Paginator data={Slides} scrollX={scrollX} />

      <TouchableOpacity style={OnboardingStyle.nextBTN} onPress={scrollTo}>
        <Text style={OnboardingStyle.btnText}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default WelcomeScreen