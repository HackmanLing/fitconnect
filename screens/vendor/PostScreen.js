import { View, Text, FlatList, Animated, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useRef, useState} from 'react'
import DefaultHeader from '../../component/headers/DefaultHeader'
import HomeStyle from '../../stylesheet/HomeStyle'
import { list1, list2, profiles } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import { Video } from 'expo-av'
import { randomColor } from '../../helpers/functions'
import ReelsComponent from '../../component/ReelComponent'
const {width, height} = Dimensions.get('window')

const PostScreen = () => {

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
          Reels
          </Text>
          <Icon name="camera" style={{fontSize: 25, color: 'white'}} />
        </View>
        <ReelsComponent />
    </View>
  )
}

export default PostScreen