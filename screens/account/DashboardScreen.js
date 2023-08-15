import { View, Text, FlatList, Animated, Dimensions, ScrollView, TouchableOpacity, Image } from 'react-native'
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
const {width, height} = Dimensions.get('window')
const itemWidth = width / 5 * 4
const announcementWidth = width / 5 * 4.5
const announcementitemHeight = height / 5 * 1
const itemHeight = height / 5 * 1
const padding = 0
const offset = itemWidth
const userItemWidth = width / 5 * 1.3
const userItemHeight = height / 5 * 0.7
const userOffset = userItemWidth


const DashboardScreen = () => {
  const [showProfileSelect, setShowProfileSelect] = useState(false)
  const [optionGroupSelect, setOptionGroupSelect] = useState('space')
  const [allPosts, setAllPost] = useState([])
  const [userData, setUserData] = useState(users)

  useEffect(() => {
    setAllPost(post)
    setUserData(users)
  }, [])

  function Users({ data }) {
    const color = randomColor()
    return <Animated.View style={[HomeStyle.users, { height: userItemHeight, width: userItemWidth, borderWidth: 1, borderColor: '#eee', backgroundColor: '#fff', marginTop: 10 }]}>
      <View style={{height: '100%', width: '100%', justifyContent: 'center', alignItems: "center"}}>
        {data.profileImage ? (
          <Image source={ data.profileImage } style={{width: 55, height: 55, borderRadius: 50}} />
        ) : (
          <View style={{width: 55, height: 55, backgroundColor: color, justifyContent: "center", alignItems: 'center', borderRadius: 50}}>
          <Text style={{fontFamily: "SemiBold", fontSize: 30, color: '#fff'}}>{getInitials(data.firstName, data.lastName)}</Text>
        </View>
        ) }
        <View style={{marginTop: 8, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Regular', fontSize: 11}}>{data.firstName ? data.firstName : ''}</Text>
          <Text style={{fontFamily: 'Regular', fontSize: 11}}>{data.lastName ? data.lastName : ''}</Text>
        </View>
      </View>
    </Animated.View>
  }

  const handleButtonClick = () => {
    setShowProfileSelect(!showProfileSelect) 
  }

  function Announcement(data) {
    const announcementData = data.item 
    const counts = countLikesAndDowns( announcementData.likes, announcementData.downs)
    return <Animated.View style={[HomeStyle.announcement, { backgroundColor: '#fff', height: announcementitemHeight, width: announcementWidth }]}>
      <View style={{height: '100%', width: '100%', padding: 10, backgroundColor: '#fff', borderRadius: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            {/* <View style={{height: 40, width: 40, borderWidth: 1, borderRadius: 50}}></View> */}
            <Image source={ announcementData.image } style={{height: 40, width: 40, borderWidth: 1, borderRadius: 50}} />
            <View style={{marginLeft: 5}}>
              <Text style={{fontFamily: "SemiBold", fontSize: 14}}>{announcementData.userName}</Text>
              <Text style={{fontFamily: "Regular", fontSize: 10, marginTop: 5}}>{announcementData.clubName}</Text>
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
    </Animated.View>
  }

  return (
    <View style={{flex: 1, backgroundColor: '#fafbff', paddingTop: 15, paddingBottom:55}}>
      <DefaultHeader onButtonClick={handleButtonClick} />
      <ScrollView showsVerticalScrollIndicator={false} overScrollMode='never'>
      

      <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        decelerationRate={"fast"} style={{flexGrow: 0, paddingHorizontal: padding, paddingLeft: 15, paddingRight: 15 }} snapToInterval={optionGroupSelect == "space" ? userOffset : offset} contentContainerStyle={optionGroupSelect == "group" ? HomeStyle.scrollView : null}
        overScrollMode='never'>
          <View style={{flexDirection: 'row'}}>
            {users && Array.isArray(users) && users.length ? users.map((user)=>(
              <Users key={user.id} data={user} />
            )) : null}
          </View>
      </ScrollView>
      
      <View style={{marginTop: 30, paddingLeft: 15, paddingRight: 15}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 20, marginBottom: 10}}>Announcements</Text>
        <FlatList
          data={announcements}
          style={{ marginBottom: 10 }}
          renderItem={Announcement}
          keyExtractor={item => item.id.toString()}
          horizontal
          pagingEnabled
          overScrollMode='never'
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={{marginTop: 10, paddingLeft: 1, paddingRight: 1}}>
        <Text style={{fontFamily: 'SemiBold', fontSize: 20, marginLeft: 15}}>Community Posts</Text>
        <View style={{ paddingHorizontal: 10 }}>
          {allPosts && Array.isArray(allPosts) && allPosts.length ? allPosts.map((post) => (
            <PostComponent user={post} key={post.id} />
          )) : null}
        </View>
      </View>
        
      </ScrollView>
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