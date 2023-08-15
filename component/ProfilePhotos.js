import React from 'react'
import { Dimensions, View, Image } from 'react-native';

function ProfilePhotos({ photos }) {
    const imgWidth = Dimensions.get('screen').width * 0.33333;
    return (
      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
          }}
        >
          {photos.map((photo, index) => (
            <View key={index}>
              <Image
                style={{ width: imgWidth, height: imgWidth }}
                source={{
                  uri: `https://picsum.photos/200/300?random=${index + 1}`,
                }}
              />
            </View>
          ))}
        </View>
    </View>
    )
}

export default ProfilePhotos
