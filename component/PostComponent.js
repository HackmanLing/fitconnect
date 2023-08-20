import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import DashboardStyle from '../stylesheet/DashboardStyle'
import { Feather as Icon, Ionicons as IIcons, FontAwesome as FAIcon } from '@expo/vector-icons'
import { getInitials, randomColor, shortenText } from '../helpers/functions'
import TimeAgoComponent from './TimeAgoComponent'
const PostComponent = ( post ) => {
  // console.log(post)
  return (
    <View>
        <View style={DashboardStyle.post}>
          <View style={DashboardStyle.postHeader}>
          {post.user.profileImage ? (
            <Image source={ post.user?.profileImage } style={{width: 55, height: 55, borderRadius: 50}} />
            ) : (
            <View style={{width: 50, height: 50, backgroundColor: randomColor(), justifyContent: "center", alignItems: 'center', borderRadius: 50}}>
                <Text style={{fontFamily: "SemiBold", fontSize: 25, color: '#fff'}}>{getInitials(post.user?.firstName, post.user?.lastName)}</Text>
            </View>
            ) }
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={{ fontFamily: 'SemiBold', fontSize: 15 }}>
                {post.user?.firstName} {post.user?.lastName}
              </Text>
              <Text style={{ fontFamily: 'Regular', fontSize: 10, marginTop: 2 }}>
                {post?.user.clubName} | {post?.user.membershipType}
              </Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              <TouchableOpacity style={{alignSelf: 'flex-end' }}>
                <Icon name='more-horizontal' size={22} />
              </TouchableOpacity>
              <Text style={{fontFamily: 'Regular', fontSize: 11}}>{TimeAgoComponent(post.user?.createdAt)}</Text>
            </View>
          </View>
          <View style={{ paddingHorizontal: 6 }}>
            <Text style={{ fontFamily: 'Regular', fontSize: 13, paddingHorizontal: 5, color: '#555' }}>
              {shortenText('Lorem ipsum dolor sit amet, consectetur adipisicing elit Exercitationem', 200)} 
            </Text>
            <Image
              style={DashboardStyle.postContentImage}
              source={{
                uri: `https://picsum.photos/500/500?random=${post.user?.id + 1}`,
              }}
            />
          </View>
          <View style={DashboardStyle.interactionBar}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <FAIcon name='thumbs-up' size={18} color='#eb3b5a' />
              <Text style={DashboardStyle.interactionText}>104 Likes</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={DashboardStyle.interactionText}>23 comments</Text>
              <Text style={DashboardStyle.interactionText}>5 shares</Text>
            </View>
          </View>
          <View
            style={{ flexDirection: 'row', marginTop: 10, marginBottom: 4 }}
          >
            <TouchableOpacity style={DashboardStyle.interactionButton}>
              <IIcons name="thumbs-up-outline" size={24} color={'#777'} />
              <Text style={{ marginLeft: 6, fontFamily: 'Regular' }}>
                Like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={DashboardStyle.interactionButton}>
              <IIcons name="chatbox-outline" size={24} color={'#777'} />
              <Text style={{ marginLeft: 6, fontFamily: 'Regular' }}>
                Comment
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={DashboardStyle.interactionButton}>
              <IIcons name="md-share-social-outline" size={24} color={'#777'} />
              <Text style={{ marginLeft: 6, fontFamily: 'Regular' }}>
                Share
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default PostComponent