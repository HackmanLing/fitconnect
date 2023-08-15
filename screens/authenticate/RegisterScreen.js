import React, { useState } from 'react'
import { KeyboardAvoidingView, ScrollView, View, Text, StyleSheet, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native'
import { Feather as Icon, MaterialIcons as MIcon } from '@expo/vector-icons';
import LoginStyle from '../../stylesheet/LoginStyle'
import { useAppContainer } from '../../appComponent/AppContainer';
import { useNavigation } from '@react-navigation/native';
const login = require("../../assets/292.png")

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [telegram, setTelegram] = useState("")
  const [passwordVisibility, setPasswordVisibility] = React.useState(true)
  const { setSession, setIsLoggedIn } = useAppContainer()

  const onRegister = async () => {
    if (!email) {
      console.log("please enter email")
      return
    }
    if (!password) {
      console.log("please enter password")
      return
    }
    if (!telegram) {
      console.log("please enter telegram")
      return
    }
    ApiClient.post("/userRouter/register", {email, password, telegram}).then(function (response) {
      let data = response.data
      if (data.status === 'success') {
        saveData("userDetails", data.data)
        aveData("session", data.sessionID)
        setSession(data.sessionID)
        setIsLoggedIn(true)
      }
    })
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "position" : null} style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <ScrollView style={{ padding: "5%", paddingTop: StatusBar.currentHeight }} showsVerticalScrollIndicator={false}>
        <View style={{ height: 350, marginTop: '1%', alignItems: 'center', justifyContent: 'center' }}>
          <Image source={login} style={{ width: '90%', height: 400 }} resizeMode="contain" />
        </View>
        <View style={{ marginTop: "5%", margin: 10 }}>
          <Text style={{ fontFamily:'SemiBold', paddingTop: 11, marginBottom: '2%', fontSize: 40, color: '#1c2f36' }}>
            Register
          </Text>
          <View style={{...LoginStyle.loginform, marginBottom: "5%"}}>
            <View style={LoginStyle.inputView}>
              <Icon color='#333' name='mail' size={15} style={LoginStyle.inputIcon} />
                <TextInput
                  style={LoginStyle.input}
                  placeholder='Email'
                  autoCapitalize='none'
                  keyboardType='email-address'
                  textContentType='emailAddress'
                  value={email}
                  onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={LoginStyle.inputView}>
              <Icon color='#333' name='user' size={15} style={LoginStyle.inputIcon} />
                <TextInput
                  style={LoginStyle.input}
                  placeholder='Username'
                  autoCapitalize='none'
                  autoCorrect={false}
                  textContentType='nickname'
                  value={telegram}
                  onChangeText={text => setTelegram(text)}
                />
            </View>
            <View style={LoginStyle.inputView}>
              <Icon color='#333' name='key' size={15} style={LoginStyle.inputIcon} />
                <TextInput
                  style={LoginStyle.input}
                  placeholder='Password'
                  secureTextEntry={passwordVisibility}
                  autoCapitalize='none'
                  autoCorrect={false}
                  textContentType='password'
                  value={password}
                  onChangeText={text => setPassword(text)}
                />
              </View>
          </View>
          <View style={{ marginBottom: '3%' }}>
            <TouchableOpacity activeOpacity={0.5} style={{ backgroundColor: '#292b2c', borderRadius: 10 }} onPress={onRegister}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "center", width: '100%', paddingVertical: '5%', }}>
                <Text style={{ paddingTop: 5, color: "white", textAlign: 'center', fontFamily: 'Bold' }}>Register</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: '10%' }}>
            <Text style={{ padding: 5, color: '#1c2f36', fontSize: 15 }}>
              Already have an account?
            </Text>
            <TouchableOpacity activeOpacity={0.5} styles={{ margin: 0, padding: 0 }} onPress={() => navigation.navigate('Login')}>
              <Text style={{  color: '#292b2c', fontWeight: "bold" }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen