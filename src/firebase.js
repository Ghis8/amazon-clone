import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAX2JWDjia3Am8XfgKhQnOo_N9ED3WVD1o",
  authDomain: "clone-1678e.firebaseapp.com",
  projectId: "clone-1678e",
  storageBucket: "clone-1678e.appspot.com",
  messagingSenderId: "1029832387335",
  appId: "1:1029832387335:web:0abf80fef3e367b52673a2",
  measurementId: "G-XP1ZPZKBS3"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)

const db=firebaseApp.firestore()
const auth =firebase.auth()

export {db,auth}