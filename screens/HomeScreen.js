import  React, {useEffect, useState} from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import BottomTabs, { bottomTabIcon} from '../component/home/BottomTabs'
import Header from '../component/home/Header'
import Post from '../component/home/Post'
import { POSTS } from '../data/posts'
import { db } from '../firebase'



const HomeScreen = ({navigation}) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collectionGroup('posts')
        .orderBy('createdAt', 'desc')
        .onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(post => ({ id : post.id, ...post.data() })))
        })
    }, [])
    return (
        <SafeAreaView style = {styles.container}> 
         <Header navigation={navigation}/>
         <ScrollView>
             {posts.map((post, index) =>
             (
                <Post post={post} key={index} />
             )
             )}
         </ScrollView>
         <BottomTabs icons = {bottomTabIcon} />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1 ,
    }
})

export default HomeScreen
