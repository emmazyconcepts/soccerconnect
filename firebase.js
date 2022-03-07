// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCc1JFZuBoeVY7o_8ALh8sb83PV4_yHxFA",
  authDomain: "app-11319.firebaseapp.com",
  projectId: "app-11319",
  storageBucket: "app-11319.appspot.com",
  messagingSenderId: "413270172008",
  appId: "1:413270172008:web:a9e67501f98ba8323e76dd"
};

// Initialize Firebase
!firebase.apps.length ?
firebase. initializeApp(firebaseConfig): 
firebase.app()

const db = firebase.firestore()
export { firebase, db }