import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar, TouchableOpacity } from 'react-native'
import {USERS} from '../../data/users'
import { USERO} from '../../data/usero'
import { firebase } from '../../firebase'

const handleSignout = async () => {
    try {
        await firebase.auth().signOut()
        console.log('zou don comot')
    } catch (error) {
        console.log(error)
    }
}

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress = {handleSignout}>
           <Image style={styles.logo} source={ require('../../assets/360l.png')} />
           <StatusBar style="auto" />
           </TouchableOpacity>
        
           <View style={styles.iconsTop}>
           <TouchableOpacity onPress = {() => navigation.push('NewPostScreen')}>
               <Image style={styles.icon} source={ require('../../assets/ppicon.png')} />

               </TouchableOpacity>

               <TouchableOpacity>
                   <View style={styles.unread}> 
                <Text style = {styles.unreadtext}> 
                     2
                </Text>
                   </View>
               <Image style={styles.icon} source={ require('../../assets/mmicon.png')} />

               </TouchableOpacity>
              
               <TouchableOpacity>
                   {USERO.map((story, index) =>
                  <Image source={{ uri: story.image }} style={styles.story}  /> )}

               </TouchableOpacity>


           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
       justifyContent: 'space-between',
       alignItems: 'center',
       flexDirection: 'row',
       marginHorizontal: 20,
       
    },
    story:{
        width:30,
        height:30,
        marginLeft: 10,
      borderRadius: 70,
      borderWidth:3,
      borderColor: '#1ABC9C'
    },
logo : {
    width: 200,
    height : 50,
    resizeMode: 'contain',
},
iconsTop : {
 flexDirection : 'row',

},
icon : {
width:25,
height:25,
marginLeft: 10
},
unread:{
    backgroundColor: '#ff3250',
    position: 'absolute',
    left : 20,
    bottom: 15,
    width : 25,
    height : 25,
    alignItems: 'center',
    borderRadius:25,
    zIndex: 10,
    justifyContent: 'center',
},
unreadtext: {
    color : 'white',
    fontWeight:'600',
}
})

export default Header
