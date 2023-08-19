import { View, Text, FlatList, Animated, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DefaultHeader from '../../component/headers/DefaultHeader'
import HomeStyle from '../../stylesheet/HomeStyle'
import { profiles } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import { Video } from 'expo-av'
import { randomColor } from '../../helpers/functions'
const {width, height} = Dimensions.get('window')

const PostScreen = () => {
  const [post, setPost] = useState([
    {
      id: 1, 
      name: "Joseph"
    },
    {
      id: 2, 
      name: "Barbs"
    },
    {
      id: 3, 
      name: "James"
    }
  ])

  function swiper(data) {

    return (
      <View style={{height: height-50, backgroundColor: randomColor()}}>
        <View style={{position: 'absolute', backgroundColor: '#888'}}></View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 35, paddingBottom:55}}>
      <FlatList
          data={post}
          renderItem={swiper}
          keyExtractor={item => item.id.toString()}
          vertical
          pagingEnabled
          overScrollMode='never'
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default PostScreen