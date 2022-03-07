import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Divider} from 'react-native-elements'

export const bottomTabIcon = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/ios-filled/50/26e07f/home-button.png',
        inactive: 'https://img.icons8.com/ios/50/26e07f/home-button.png',
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/50/26e07f/clear-search.png',
        inactive: 'https://img.icons8.com/ios/50/26e07f/clear-search.png',
    },
    {
        name: 'News',
        active: 'https://img.icons8.com/ios-filled/50/26e07f/real-time-news.png',
        inactive: 'https://img.icons8.com/ios/50/26e07f/real-time-news.png',
    },
    {
        name: 'score',
        active: 'https://img.icons8.com/ios-filled/50/26e07f/soccer-goal.png',
        inactive: 'https://img.icons8.com/ios/50/26e07f/goalkeeper-with-net.png',
    },
    {
        name: 'shop',
        active: 'https://img.icons8.com/ios-filled/50/26e07f/shopping-mall.png',
        inactive: 'https://img.icons8.com/ios/50/26e07f/shopping-mall.png',
    }

]

const BottomTabs = ({ icons }) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({ icon }) => (
        <TouchableOpacity onPress= {() => setActiveTab(icon.name)}>
            <Image source= {{ uri: activeTab === icon.name ? icon.active : icon.inactive}} style={styles.icon}/>
        </TouchableOpacity>
    )
    return (
      <View style= {styles.wrap}>
          <Divider width={1} orientation='vertical' />
 <View style ={styles.container}>
           {icons.map((icon, index) => (
               <Icon key={index}icon={icon} />
           ))}
                </View>
      </View>
       
    )
}
const styles = StyleSheet.create ({
    wrap: {
     
     width: '100%',
    
     zIndex: 999,
     backgroundColor: '#000'
    },
    container : {
flexDirection : 'row',
justifyContent: 'space-around',
height : 50,
paddingTop: 10,
    },
    icon: {
        width : 30,
        height :30,
    }
})

export default BottomTabs
