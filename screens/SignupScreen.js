import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,StatusBar } from 'react-native'
import SignupForm from '../component/SignupForm/SignupForm'
<StatusBar style="auto" />

const SignupScreen = ({navigation}) => (
    <View style = {{flex : 1, backgroundColor: 'white', paddingTop:100, paddingHorizontal:12, }} >
        <View style = {{alignItems: 'center', margintop:60,}} >
        <Image style= {{height: 150, width: 150, }} source={ require('../assets/360LOGO.png')} />
        </View>
        <SignupForm navigation={navigation}/>
    </View>
)

export default SignupScreen
