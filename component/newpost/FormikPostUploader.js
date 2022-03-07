import React, { Component, useEffect } from 'react'
import { Text, View, Image, TextInput, Button } from 'react-native'
import * as Yup from 'yup'
import {Formik} from 'formik'
import {useState} from 'react'
import { Divider } from 'react-native-elements'
import validUrl from 'valid-url'
import { db, firebase} from '../../firebase'

const PLACEHOLDER_IMG = 'https://img.icons8.com/ios-glyphs/90/26e07f/full-image.png'
 
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL IS REQUIRED'),
    caption: Yup.string().max(2200, 'CAPTION HAS REACHED THE MAX CHARACTER')
})

const FormikPostUploader = ({navigation}) => {
    const [ ThumbnailUrl, setThumbnailUrl] = useState (PLACEHOLDER_IMG)
    const [currentLoggedInUser, setCurrentLoggedInuser] = useState(null)

    const getUsername = () => {
        const user = firebase.auth().currentUser
        const unsubscribe = db 
        .collection('users')
        .where('owner_uid', '==' , user.uid).limit(1).onSnapshot(
          snapshot => snapshot.docs.map(doc => {
            setCurrentLoggedInuser({
              username:doc.data().username,
              profilePicture: doc.data().profile_picture
            })
          }))
          return unsubscribe
    }
    useEffect(() => {
      getUsername()
    }, [])

    const uploadToFirebase = (imageUrl, caption) => {
      const unsubscribe = db
      .collection('users')
      .doc(firebase.auth().currentUser.email)
      .collection('posts')
      .add ({
        imageUrl: imageUrl,
        user: currentLoggedInUser.username,
        profile_picture: currentLoggedInUser.profilePicture,
        owner_uid: firebase.auth().currentUser.uid,
        owner_email : firebase.auth().currentUser.email,
        caption: caption,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        likes_by_users:[],
        comments: [],
      })

      .then(() => navigation.goBack())
      return unsubscribe
    }
    
        return (

          <Formik
          initialValues = {{caption: '', imageUrl: ''}}
          onSubmit= {values => {
            uploadToFirebase(values.imageUrl, values.caption)
        }}
          validationSchema= {uploadPostSchema}
          validateOnMount= {true}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors, isValid}) => (
            <> 
            <View style= {{flexDirection: 'row', margin: 20, justifyContent: 'space-between'}}>
                <Image source  = {{ uri: validUrl.isUri (ThumbnailUrl) ? ThumbnailUrl : PLACEHOLDER_IMG}} 
                style={{width: 100, height:100, margin: 20}}/>
          

            <View style={{flex: 1, marginleft:12}}>          
            <TextInput
            style = {{ color: 'white', fontSize: 20,   }}
             placeholder='Write a Caption' 
             placeholderTextColor = 'gray'
             multiline= {true}
             onChangeText={handleChange('caption')}
             onBlur = {handleBlur('caption')}
             value={values.caption}
             />
             </View>  

             

              </View>
              <Divider width={'0.2'} orientation='vertical' />
              <TextInput
              onChange= {e => setThumbnailUrl(e.nativeEvent.text)}
            style = {{ color: 'white', fontSize: 18}}
             placeholder='Enter Image Url' 
             placeholderTextColor = 'gray'
             onChangeText={handleChange('imageUrl')}
             onBlur = {handleBlur('imageUrl')}
             value={values.imageUrl}/>
              {errors.imageUrl && (
                <Text style= {{color: 'red', fontSize: 15}}>
                    {errors.imageUrl}
                </Text>
            )}
            <Button onPress= {handleSubmit} title='Share' disabled={!isValid}/>
            </>
           
             ) }

          </Formik>
        )
    }




export default FormikPostUploader
