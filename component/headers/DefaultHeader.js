import { Feather as Icon, Ionicons as IIcons, MaterialCommunityIcons as MCIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeStyle from '../../stylesheet/HomeStyle'

const DefaultHeader = ({ onButtonClick }) => {
  return (
    <View style={{backgroundColor: '#fafbff', paddingTop: 40, paddingBottom: 10, paddingLeft: 15, paddingRight: 15}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: "center"}}>
                <TouchableOpacity style={HomeStyle.profilePic} activeOpacity={0.6} onPress={onButtonClick}>
                    <Image source={ require ("./../../assets/icons/1.png") } style={{height: '100%', width: '100%'}} />
                </TouchableOpacity>
                <View style={{marginLeft: 10}}>
                    <Text style={{...HomeStyle.headerUsername}}>HackmanLing</Text>
                    <Text style={{...HomeStyle.headerUserType}}>member</Text>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={HomeStyle.headerButton}>
                    <IIcons name="notifications-outline" size={25} color={"#333"} />
                </TouchableOpacity>
                <TouchableOpacity style={{...HomeStyle.headerButton, marginLeft: 10}}>
                    <Icon name="send" size={25} color={"#333"} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default DefaultHeader