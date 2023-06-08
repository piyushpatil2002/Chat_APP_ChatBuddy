
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBySBNGb8gYp5TKPsYJycsqFOt4asXCLJk",
  authDomain: "chatbuddy-fa2d8.firebaseapp.com",
  projectId: "chatbuddy-fa2d8",
  storageBucket: "chatbuddy-fa2d8.appspot.com",
  messagingSenderId: "702856853232",
  appId: "1:702856853232:web:5d265253e50203105e7435",
  measurementId: "G-6TN8VF893N"
  }).auth();