import { View, Text } from 'react-native'
import React, { useState } from 'react'
import DefaultHeader from '../../component/headers/DefaultHeader'
import HomeStyle from '../../stylesheet/HomeStyle'
import { profiles } from '../../helpers/fixedData'
import { Feather as Icon, Ionicons as IIcons } from '@expo/vector-icons'

const PostPreviewScreen = () => {
  const [showProfileSelect, setShowProfileSelect] = useState(false)
  
  const handleButtonClick = () => {
    setShowProfileSelect(!showProfileSelect)
  }    

  return (
    <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 15, paddingLeft: 15, paddingRight: 15}}>
      <DefaultHeader onButtonClick={handleButtonClick} />
      {showProfileSelect ? (
        <View style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0}}>
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

export default PostPreviewScreen