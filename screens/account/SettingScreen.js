import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import HomeStyle from '../../stylesheet/HomeStyle'
import { profiles, userData } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import DefaultHeader from '../../component/headers/DefaultHeader'
import SettingStyle from '../../stylesheet/SettingStyle'
import ProfilePhotos from '../../component/ProfilePhotos'
// import { ScrollView } from 'react-native-gesture-handler'

const SettingScreen = () => {
  const [showContent, setShowContent] = useState('Photos')

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 15, paddingBottom:55}}>
      <ScrollView>
        <View>
          <Image
            style={SettingStyle.coverImage}
            source={{ uri: 'https://picsum.photos/500/500?random=209' }}
          />
        </View>
        <View style={SettingStyle.profileContainer}>
          <View>
            <View style={SettingStyle.profileImageView}>
              <Image
                style={SettingStyle.profileImage}
                source={ userData.profileImage }
              />
            </View>
            <View style={SettingStyle.nameAndBioView}>
              <Text style={SettingStyle.userFullName}>{userData.firstName} {userData.otherName} {userData.lastName}</Text>
              <Text style={SettingStyle.userBio}>{'I love capturing photos'}</Text>
            </View>
            <View style={SettingStyle.countsView}>
              <View style={SettingStyle.countView}>
                <Text style={SettingStyle.countNum}>13</Text>
                <Text style={SettingStyle.countText}>Posts</Text>
              </View>
              <View style={SettingStyle.countView}>
                <Text style={SettingStyle.countNum}>1246</Text>
                <Text style={SettingStyle.countText}>Followers</Text>
              </View>
              <View style={SettingStyle.countView}>
                <Text style={SettingStyle.countNum}>348</Text>
                <Text style={SettingStyle.countText}>Following</Text>
              </View>
            </View>
          </View>
          <View style={SettingStyle.interactButtonsView}>
            <TouchableOpacity style={SettingStyle.interactButton}>
              <Text style={SettingStyle.interactButtonText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...SettingStyle.interactButton,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#eb3b5a',
              }}
            >
              <Text
                style={{ ...SettingStyle.interactButtonText, color: '#eb3b5a' }}
              >Message</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
            <Text style={{ fontFamily: 'Regular', fontSize: 14 }}>
              {'Followed by '}
              <Text style={{ fontFamily: 'Bold' }}>hackman </Text>
              {'and '}
              <Text style={{ fontFamily: 'Bold' }}>19 others</Text>
            </Text>
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
            <View style={SettingStyle.profileContentButtonsView}>
              <TouchableOpacity
                style={{
                  ...SettingStyle.showContentButton,
                  borderBottomWidth: showContent === 'Photos' ? 2 : 0,
                }}
                onPress={() => setShowContent('Photos')}
              >
                <Text style={SettingStyle.showContentButtonText}>Photos</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...SettingStyle.showContentButton,
                  borderBottomWidth: showContent === 'Albums' ? 2 : 0,
                }}
                onPress={() => setShowContent('Albums')}
              >
                <Text style={SettingStyle.showContentButtonText}>Albums</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...SettingStyle.showContentButton,
                  borderBottomWidth: showContent === 'Tags' ? 2 : 0,
                }}
                onPress={() => setShowContent('Tags')}
              >
                <Text style={SettingStyle.showContentButtonText}>Tags</Text>
              </TouchableOpacity>
            </View>
            {showContent === 'Photos' ? (
              <ProfilePhotos photos={new Array(3).fill(1)} />
            ) : showContent === 'Albums' ? (
                <ProfilePhotos photos={new Array(5).fill(1)} />
            ) : (
              <ProfilePhotos photos={new Array(2).fill(1)} />
            )}
        </View>
      </ScrollView>
      
    </View>
  )
}

export default SettingScreen