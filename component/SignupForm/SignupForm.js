import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import {firebase, db } from '../../firebase.js'

const SignupForm = ({navigation}) => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        username: Yup.string().required().min(2, 'An username is required'),
        password: Yup.string()
        .required()
        .min(6, 'Your password must has at least 6 characters')
    })

    const getRandomProfilePicture = async () => {
        const response = await fetch('https://randomuser.me/api')
        const data = await response.json()
        return data.results[0].picture.large
    }

    const onSignup = async (email, password, username) => {
     try{
       const authUser =  await firebase.auth().createUserWithEmailAndPassword(email, password )
         console.log ('welcome')
         
         db.collection('users')
         .doc(authUser.user.email)
         .set({
             owner_uid : authUser.user.uid,
             username: username,
             email: authUser.user.email, 
             profile_picture : await getRandomProfilePicture(),
         })
           }  catch (error) {
               Alert.alert('hello', error.message)
           }
    }
    return (
        <View style = {styles.wrapper}>
            <Formik
            initialValues= {{ email: '', username: '', password:''}}
            onSubmit={values => { onSignup(values.email, values.password, values.username)}}
            validationSchema= {SignupFormSchema}
            validationOnMount = {true}>

                {({ handleBlur, handleChange, handleSubmit, values,isValid}) => (
                <>
             <View style={[styles.inputfield,
            {borderColor: values.email.length< 1 || Validator.validate(values.email)? '#ccc': 'red',},
            ]} >
          <TextInput
          placeholder = 'Email'
         placeholderTextColor= '#444'
         autoCapitalize='none'
         keyboardType= 'email-address'
         textContentType= 'emailAddress'
         autoFocus = {true}
         onChangeText = {handleChange('email')}
         onBlur = {handleBlur('email')}
         values = {values.email}
                    >

          </TextInput>
            </View>
       
            <View style= {[styles.inputfield,
             {borderColor: 1 > values.username.length || values.username.length > 2 ? '#ccc': 'red',},
            ]}>
          <TextInput
          placeholder= "Username"
          placeholderTextColor= '#444'
          autoCapitalize= 'none'
          secureTextEntry={false}
          textContentType='username'
          onChangeText = {handleChange('username')}
          onBlur = {handleBlur('username')}
          values = {values.password}>
            
          </TextInput>

          
            </View>

            <View style= {[styles.inputfield,
             {borderColor: 1 > values.password.length || values.password.length > 6 ? '#ccc': 'red',},
            ]}>
          <TextInput
          placeholder= "Password"
          placeholderTextColor= '#444'
          autoCapitalize= 'none'
          secureTextEntry={true}
          textContentType='password'
          onChangeText = {handleChange('password')}
          onBlur = {handleBlur('password')}
          values = {values.password}>
            
          </TextInput>

          
            </View>
            {/* <View style = {{ alignItems: 'flex-end', marginBottom: 30, }}>
                <Text style= {{color: '#6bb0f5'}}>Forget Password</Text>
            </View> */}
         
         <Pressable titlesize={20} style= {styles.button(isValid)} onPress={handleSubmit} >
             <Text>Sign up</Text>
         </Pressable>
          <View style= {styles.signupContainer}>
              <Text>already have an account?</Text>
              <TouchableOpacity onPress = {() => navigation.goBack()}>
                  <Text style={{color : '#26d246'}}> Log In</Text>
              </TouchableOpacity>
          </View>
          </>
          )}
          </Formik>
        </View>
    )
}
const styles = StyleSheet.create({
    inputfield: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    wrapper: {
        marginTop : 80,
    },
    button:isValid => ( {
        backgroundColor: isValid ? '#26d246' : '#262',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius:4,
    }),
    signupContainer : {
        flexDirection : 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop:50, 
        
    }
})

export default SignupForm

