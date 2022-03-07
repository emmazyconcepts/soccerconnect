// import React from 'react'
// import { StyleSheet, View, Image} from 'react-native'

// const LoginScreeen = () => (
// <View style = {styles.container}>
//     <View style= {styles.container}>
//     <Image style={styles.logo} source={ require('../assets/360LOGO.png')} />
//     </View>
// </View>


// )

// const styles = StyleSheet.create({
// container: {
//  flex : 1, 
//  backgroundColor: 'white',
//  paddingTop: 50,
//  paddingHorizontal: 12, 
// },
// logoContainer: {
//     alignItems: 'center',
//     margintop: 60,

// }
// })
// export default LoginScreeen
import React, { Component } from 'react'
import { Text, View, StyleSheet,Image,StatusBar } from 'react-native'
import LoginForm from '../component/loginScreen/LoginForm'
<StatusBar style="auto" />

const LoginScreen = ({navigation}) => (
    <View style = {{flex : 1, backgroundColor: 'white', paddingTop:100, paddingHorizontal:12, }} >
        <View style = {{alignItems: 'center', margintop:60,}} >
        <Image style= {{height: 150, width: 150, }} source={ require('../assets/360LOGO.png')} />
        </View>
        <LoginForm navigation={navigation}/>
    </View>
)


export default LoginScreen
