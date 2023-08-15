import React from "react"
import HomeContainer from "./HomeContainer"
import LoginContainer from "./LoginContainer"
import { useAppContainer } from "./AppContainer"

const AuthController = () => {
   const { isLoggedIn } = useAppContainer()
   return isLoggedIn ? <LoginContainer /> : <HomeContainer />
}

export default AuthController