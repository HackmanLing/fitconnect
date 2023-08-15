import { View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import HomeStyle from '../stylesheet/HomeStyle'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import TimeAgoComponent from './TimeAgoComponent'
import { countLikesAndDowns, formatCurrency, formatRating } from '../helpers/functions'

const TodayListItem = ({item}) => {

  const counts = countLikesAndDowns(item.likes, item.downs)

  return (
    <TouchableOpacity activeOpacity={0.8} key={item.id} style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, borderBottomWidth: 1, borderBottomColor: '#eee', paddingBottom: 10}}>
        {/* <Image source={{ uri: item.image }} style={{width: '30%', height: 100, borderRadius: 10}} /> */}
        <View style={{width: '100%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', width: '30%'}}>
              <Image source={{ uri: item.image }} style={{width: 25, height: 25, borderRadius: 5}} />
              <Text style={{fontFamily: 'Bold', color: '#555', fontSize: 11, marginLeft: 5}} numberOfLines={1}>{item.user.name}</Text>
            </View>
            <Text style={{fontFamily: 'Bold', fontSize: 11, color: '#777'}}>
              <IIcons name='star' size={15} color="#FFD700" />
               Ratings: {formatRating(item.rating)}
            </Text>
            <Text style={{fontFamily: 'Bold', fontSize: 11}}>
              <IIcons name='thumbs-up' size={15} color="#FFD700" /> {counts.likes.count}    <IIcons name='thumbs-down' size={15} color="#d9534f" /> {counts.downs.count}
            </Text>
          </View>
            <Text style={{...HomeStyle.title, color:'#444'}} numberOfLines={2}>{item.title}</Text>
            <Text style={{...HomeStyle.description, color: '#aaa', marginTop: 5}} numberOfLines={2}>{item.description}</Text>
            <View style={{marginTop: 5, flexDirection: 'row', marginTop: 7, justifyContent: 'space-between', width: '100%'}}>
              <View style={{width: '50%'}}>
                <Text style={{fontFamily: 'SemiBold', fontSize: 11,  color: '#555'}}>
                 Price: {formatCurrency(item.price, 'USD')}
                </Text>
              </View>
              <View style={{paddingRight: 10}}><Text>{TimeAgoComponent(item.createdAt, "#555")}</Text></View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default TodayListItem