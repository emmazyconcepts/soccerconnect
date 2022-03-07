import React, { Component } from 'react'
import { Text, View, StatusBar, StyleSheet, Image,TouchableOpacity } from 'react-native'
import FormikPostUploader from './FormikPostUploader'




const AddNewPost = ({navigation}) => (
    <View style={styles.container}>
      <Header navigation={navigation}/>
      <FormikPostUploader navigation={navigation}/>
    </View>
)
const Header = ({navigation}) => (
            
            <View style={styles.headerContainer}>

                           <StatusBar style="auto" />

            <TouchableOpacity onPress = {() => navigation.goBack()}>
            <Image source={{ uri: 'https://img.icons8.com/ios/50/26e07f/back--v1.png'}}
                style= {{ height:30, width: 30,}}
                />
            </TouchableOpacity>
            <Text style = {styles.heardertext}> NEW POST </Text>
            <Text></Text>

            </View>
        )
    

const styles = StyleSheet.create({

    container: {
        marginHorizontal:10,
    },
    headerContainer : {
       flexDirection : 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
    },
    heardertext : {
        fontWeight: '700',
        color: 'white', 
        fontSize: 20,
        marginRight: 25,
    }
})
export default AddNewPost
