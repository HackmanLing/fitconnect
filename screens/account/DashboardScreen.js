import { View, Text, FlatList, Animated, Dimensions, ScrollView, TouchableOpacity, Image, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import TodayListItem from '../../component/TodayListItem'
import { clubs, profiles, todayPosts, users, announcements, post } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons, FontAwesome as FAIcon } from '@expo/vector-icons'
import HomeStyle from '../../stylesheet/HomeStyle'
import { countLikesAndDowns, formatCurrency, formatRating, getInitials, oppositeColor, randomColor, shortenText } from '../../helpers/functions'
import TimeAgoComponent from '../../component/TimeAgoComponent'
import DefaultHeader from '../../component/headers/DefaultHeader'
import DashboardStyle from '../../stylesheet/DashboardStyle'
import PostComponent from '../../component/PostComponent'
import Announcement from '../../component/Announcement'
import { useAppContainer } from '../../appComponent/AppContainer'
const {width, height} = Dimensions.get('window')
const itemWidth = width / 5 * 4
const announcementWidth = width / 5 * 4.5
const announcementItemHeight = height < 700 ? height / 4 * 1 : height / 5 * 1
const itemHeight = height / 5 * 1
const padding = 0
const offset = itemWidth
const userItemWidth = width < width / 5 * 1.3
const userItemHeight = height < 700 ? height / 5 * 1 : height / 5 * 0.7 
const userOffset = userItemWidth


const DashboardScreen = () => {
  const [showProfileSelect, setShowProfileSelect] = useState(false)
  const [optionGroupSelect, setOptionGroupSelect] = useState('group')
  const [allPosts, setAllPost] = useState([])
  const [userData, setUserData] = useState(users)
  const { unloadVideo, stopPlaying } = useAppContainer()

  useEffect(() => {
    setAllPost(post)
    setUserData(users)
  }, [])

  useEffect(() => {
    stopPlaying()
    return () => {
      unloadVideo()
    }
  }, [])

  function Users({ data }) {
    const color = randomColor()
    return <Animated.View style={[HomeStyle.users, { paddingVertical: 12, paddingHorizontal: 25, backgroundColor: '#fff', marginTop: 10 }]}>
      <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: "center"}}>
        {data.profileImage ? (
          <Image source={ data.profileImage } style={{width: 55, height: 55, borderRadius: 50}} />
        ) : (
          <View style={{width: 57, height: 57, backgroundColor: color, justifyContent: "center", alignItems: 'center', borderRadius: 50}}>
          <Text style={{fontFamily: "SemiBold", fontSize: 27, color: '#fff'}}>{getInitials(data.firstName, data.lastName)}</Text>
        </View>
        ) }
        <View style={{marginTop: 8, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Medium', fontSize: 11}}>{data.firstName ? data.firstName : ''}</Text>
          <Text style={{fontFamily: 'Medium', fontSize: 11}}>{data.lastName ? data.lastName : ''}</Text>
        </View>
      </View>
    </Animated.View>
  }

  const handleButtonClick = () => {
    setShowProfileSelect(!showProfileSelect) 
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fafbff', paddingTop: 15, paddingBottom:55}}>
      <DefaultHeader onButtonClick={handleButtonClick} />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
      

      <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        decelerationRate={"fast"} style={{flexGrow: 0, paddingHorizontal: padding, paddingLeft: 15, paddingRight: 15 }} 
        snapToInterval={optionGroupSelect == "space" ? userOffset : offset}
        overScrollMode='never'>
          <View style={{flexDirection: 'row', paddingRight: 20}}>
            {users && Array.isArray(users) && users.length ? users.map((user)=>(
              <Users key={user.id} data={user} />
            )) : null}
          </View>
      </ScrollView>
      

      {/* ANNOUNCEMENTS */}
      <View style={{marginTop: 30, paddingLeft: 15, paddingRight: 15}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 20, marginBottom: 10}}>Announcements</Text>
        <FlatList
          data={announcements}
          style={{ marginBottom: 10 }}
          renderItem={Announcement}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
        />
      </View>


      {/* COMMUNITY POSTS */}
      <View style={{marginTop: 10, paddingLeft: 1, paddingRight: 1}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 20, marginLeft: 15}}>Community Posts</Text>
        <View style={{ paddingHorizontal: 10 }}>
          {allPosts && Array.isArray(allPosts) && allPosts.length ? allPosts.map((post) => (
            <PostComponent user={post} key={post.id} />
          )) : null}
        </View>
      </View>
        
      </ScrollView>

      {/* SELECT PROFILE SHEET */}
      {showProfileSelect ? (
        <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 10}}>
          <View onPress={()=>setShowProfileSelect(!showProfileSelect)} style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, zIndex: 1 }} />
            <View style={{...HomeStyle.modal, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
              {profiles && profiles.length ? profiles.map((item)=>(
              <View key={item.id} style={{backgroundColor: '#eee', width: '30%', height: 100, borderRadius: 10, marginBottom: 10, marginTop: 10, padding: 5}}>
              <Image source={ item.image }  style={{width: '100%', height: '100%'}} />
              </View>)) : null}
              <Text style={{...HomeStyle.modalTitle, fontFamily: 'SemiBold', fontSize: 20}}>Select Your Profile</Text>
              <TouchableOpacity style={HomeStyle.closeBtn} onPress={()=>setShowProfileSelect(!showProfileSelect)}>
                <Icon name='x' size={20} color={'#fff'} />
              </TouchableOpacity>
            </View>
        </View>
      ) : null}
    </View>
  )
}

export default DashboardScreen