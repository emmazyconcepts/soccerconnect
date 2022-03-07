import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import LoginScreeen from './screens/LoginScreen'
import SignupScreen from './screens/SignupScreen'

const Stack = createStackNavigator()

const screenOptions = {
    headerShown: false,
}

 export const SignedInStack = () =>   

     ( <NavigationContainer>
        <Stack.Navigator
        initialRouteName= 'HomeScreen'
        screenOptions= {screenOptions}
        >

        <Stack.Screen name='HomeScreen' component = {HomeScreen} />
        <Stack.Screen name='NewPostScreen' component = {NewPostScreen} />
        <Stack.Screen name= 'SignupScreen' component = {SignupScreen} />



            </Stack.Navigator>
        
         
       </NavigationContainer>
         
        )
    export const SignedOutStack = () => (
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName= 'LoginScreeen'
        screenOptions= {screenOptions}
        >


        <Stack.Screen name= 'LoginScreeen' component = {LoginScreeen} />
        <Stack.Screen name= 'SignupScreen' component = {SignupScreen} />



            </Stack.Navigator>
        
         
       </NavigationContainer>
    )

