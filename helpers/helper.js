import axios from "axios"
import { io } from "socket.io-client"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from "./config"

export const saveData = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(
        {
            dataType: typeof value,
            data: value
        }
    ))
    return true
}

export const getSession = async () => {
    try {
      const value = await AsyncStorage.getItem('sessionID')
      if(value !== null) {
        return {data: value}
      }
    } catch(e) {
      return {error: e}
    }
}

export const getData = async (key) => {
    let result = await AsyncStorage.getItem(key)
    if (result) {
        let data = JSON.parse(result)
        return data.data
    }

    return null
}

export const clearData = async (key) => {
    let clearStoredData = await deleteData(key)
    if (clearStoredData) {
      return true
    }
}

export const ApiClient = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json'
    }
})


export const SocketIO = io(API_URL)