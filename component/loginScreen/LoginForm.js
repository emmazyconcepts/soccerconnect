import React, { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, Pressable, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'
import {firebase} from '../../firebase'
const LoginForm = ({navigation}) => {
    const LoginFormSchema = Yup.object().shape({
        email: Yup.string().email().required('An email is required'),
        password: Yup.string()
        .required()
        .min(6, 'Your password must has at least 6 characters')
    })
    const onLogin = async (email, password) => {
        try{
         await firebase.auth().signInWithEmailAndPassword(email, password )
         console .log('u don enter')
        }catch(error){
            Alert.alert('hello.....',
            error.message +'\n\n... What would you love to do ',[
                {
                    text: 'ok',
                    onPress: () => console.log ('ok'),
                    style : 'cancel',
                },
                {
                    text: 'Sign Up',
                    onPress: () => navigation.push('SignupScreen')
                }
            ]
            )    
        }
    }
    return (
        <View style = {styles.wrapper}>
            <Formik
            initialValues= {{ email: '', password:''}}
            onSubmit={values => { onLogin(values.email, values.password)}}
            validationSchema= {LoginFormSchema}
            validationOnMount = {true}>

                {({ handleBlur, handleChange, handleSubmit, values,isValid}) => (
                <>
             <View style={[styles.inputfield,
            {borderColor: values.email.length< 1 || Validator.validate(values.email)? '#ccc': 'red',},
            ]} >
          <TextInput
          placeholder = 'Phone number, Username or email'
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
            <View style = {{ alignItems: 'flex-end', marginBottom: 30, }}>
                <Text style= {{color: '#26d246'}}>Forget Password</Text>
            </View>
         
         <Pressable titlesize={20} style= {styles.button(isValid)} onPress={handleSubmit} >
             <Text> Log In </Text>
         </Pressable>
          <View style= {styles.signupContainer}>
              <Text>Don,t have an account?</Text>
              <TouchableOpacity onPress = {() => navigation.push('SignupScreen')}>
                  <Text style={{color : '#26d246'}}> Sign Up</Text>
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
export default LoginForm
