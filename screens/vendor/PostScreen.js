import { View, Text, FlatList, Animated, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import DefaultHeader from '../../component/headers/DefaultHeader'
import HomeStyle from '../../stylesheet/HomeStyle'
import { profiles } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import { Video } from 'expo-av'
const {width, height} = Dimensions.get('window')

const PostScreen = () => {
  const [post, setPost] = useState([
    
  ])

  function swiper(data) {

    return (
      <View style={{flex: 0, backgroundColor: '#444'}}>
        <View style={{}}></View>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 40, paddingBottom:45}}>
      <FlatList
          data={post}
          style={{ marginBottom: 10 }}
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