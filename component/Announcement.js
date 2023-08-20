import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Feather as Icon, Ionicons as IIcons, FontAwesome as FAIcon } from '@expo/vector-icons'
import HomeStyle from '../stylesheet/HomeStyle'
import { countLikesAndDowns, shortenText } from '../helpers/functions'
const {width, height} = Dimensions.get('window')
const announcementWidth = width / 5 * 4.5
const announcementItemHeight = height < 700 ? height / 4 * 1 : height / 5 * 1

const Announcement = (data) => {
  const announcementData = data.item 
  const counts = countLikesAndDowns( announcementData.likes, announcementData.downs)
  return (
    <View style={[HomeStyle.announcement, { backgroundColor: '#fff', height: announcementItemHeight, width: announcementWidth }]}>
      <View style={{height: '100%', width: '100%', padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* <View style={{height: 40, width: 40, borderWidth: 1, borderRadius: 50}}></View> */}
            <Image source={ announcementData.image } style={{height: 40, width: 40, borderRadius: 50}} />
            <View style={{marginLeft: 5}}>
              <Text style={{fontFamily: "SemiBold", fontSize: 14}}>{announcementData.userName}</Text>
              <Text style={{fontFamily: "Regular", fontSize: 10, marginTop: 2}}>{announcementData.clubName}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 10}}>
            <TouchableOpacity style={{marginRight: 15}}>
              <Text><IIcons name='thumbs-up' size={18} color="#FFD700" /> {counts.likes.count}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginRight: 15}}>
              <Text><IIcons name='thumbs-down' size={18} color="#d9534f" /> {counts.downs.count}</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <IIcons name="md-share-social-outline" size={16} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop: 13}}>
          <Text style={{fontFamily: "SemiBold", fontSize: 16}}>{announcementData.title ? shortenText(announcementData.title, 30) : ""}</Text>
          <Text style={{fontFamily: "Regular", fontSize: 12, marginTop: 5, color: '#777'}}>{announcementData.content ? shortenText(announcementData.content ,150) : ''}</Text>
        </View>
      </View>
    </View>
  )
}

export default Announcement