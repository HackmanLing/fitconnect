import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeStyle from '../../stylesheet/HomeStyle'
import { profiles } from '../../helpers/fixedData'

const Header = ({ onButtonClick }) => {
  const [search, setSearch] = useState("")
  const [wallet, setWallet] = useState("")
  const [profile, setProfile] = useState("")
  
  return (
    <View style={{backgroundColor: '#fff', paddingTop: 50, paddingBottom: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={HomeStyle.headerTitle}>DashBoard</Text>
                <Text style={HomeStyle.headerUsername}>HackmanLing</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
                <TouchableOpacity style={HomeStyle.profilePic} activeOpacity={0.6} onPress={onButtonClick}>
                    <Image source={ require ("./../../assets/icons/1.png")} style={{height: '100%', width: '100%'}} />
                </TouchableOpacity>
            </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, }}>
            <TextInput
                style={HomeStyle.searchBar}
                placeholder='Search hoogle..'
                autoCapitalize='none'
                keyboardType='default'
                value={search}
                onChangeText={text => setSearch(text)}
            />
            <TouchableOpacity style={HomeStyle.searchBTN} activeOpacity={0.6}>
                <Icon name='search' size={20} color={"#fff"} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header