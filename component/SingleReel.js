import React, { useRef, useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Feather as Icon, Ionicons as IIcons, Ionic as IconI, AntDesign as AIcons, MaterialCommunityIcons as MCIcons } from '@expo/vector-icons';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

const SingleReel = ({ item, index, currentIndex }) => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [isPlaying, setIsPlaying] = useState(true)

  const videoRef = useRef(null);
  const [videoStatus, setVideoStatus] = useState({});
  const [mute, setMute] = useState(false);
  const [like, setLike] = useState(item.isLike);

  const handlePlaybackStatusUpdate = (status) => {
    setVideoStatus(status);
  }

  const handleLongPressStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.BEGAN) {
      setIsPlaying(true);
    } else if (nativeEvent.state === State.END) {
      setIsPlaying(false);
    }
  }

  const onBuffer = buffer => {
    console.log('buffring', buffer);
  }

  const onError = error => {
    console.log('error', error);
  }

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => setMute(!mute)}
          onLongPress={handleLongPressStateChange}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}>
          <Video
            ref={videoRef}
            onBuffer={onBuffer}
            onError={onError}
            repeat={true}
            isMuted={mute}
            shouldPlay={isPlaying ? currentIndex === index : null}
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
            }}
            resizeMode="contain"
            source={{
              uri: item.video,
            }}
            isLooping={true}
            onPlaybackStatusUpdate={handlePlaybackStatusUpdate}
            paused={currentIndex == index ? false : true}
            muted={mute}
          />
        </TouchableOpacity>
      <Icon
        name="mic-off"
        style={{
          fontSize: mute ? 20 : 0,
          color: 'white',
          position: 'absolute',
          backgroundColor: 'rgba(52,52,52,0.6)',
          borderRadius: 100,
          padding: mute ? 20 : 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: windowWidth,
          zIndex: 1,
          bottom: 50,
          padding: 10,
        }}>
        <View style={{}}>
          <TouchableOpacity style={{width: 150}}>
            <View
              style={{width: 100, flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 100,
                  backgroundColor: 'white',
                  margin: 10,
                }}>
                <Image
                  source={item.postProfile}
                  style={{
                    width: '100%',
                    height: '100%',
                    resizeMode: 'cover',
                    borderRadius: 100,
                  }}
                />
              </View>
              <Text style={{color: 'white', fontSize: 16}}>{item.title}</Text>
            </View>
          </TouchableOpacity>
          <Text style={{color: 'white', fontSize: 14, marginHorizontal: 10}}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', padding: 10}}>
            <IIcons
              name="ios-musical-note"
              style={{color: 'white', fontSize: 16}}
            />
            <Text style={{color: 'white'}}>Original Audio</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 55,
          right: 0,
        }}>
        <TouchableOpacity onPress={() => setLike(!like)} style={{padding: 10}}>
          <AIcons
            name={like ? 'heart' : 'hearto'}
            style={{color: like ? 'red' : 'white', fontSize: 25}}
          />
          <Text style={{color: 'white'}}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <IIcons
            name="ios-chatbubble-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <IIcons
            name="paper-plane-outline"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{padding: 10}}>
          <Icon
            name="more-vertical"
            style={{color: 'white', fontSize: 25}}
          />
        </TouchableOpacity>
        <View
          style={{
            width: 30,
            height: 30,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            margin: 10,
          }}>
          <Image
            source={item.postProfile}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 10,
              resizeMode: 'cover',
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleReel;
