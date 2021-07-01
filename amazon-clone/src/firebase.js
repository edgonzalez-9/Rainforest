import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCwSUOlS6zh-j48rSbnWj3flxPJls-oB-U",
    authDomain: "clone-c1271.firebaseapp.com",
    projectId: "clone-c1271",
    storageBucket: "clone-c1271.appspot.com",
    messagingSenderId: "51447076787",
    appId: "1:51447076787:web:3bfbdb9e2869a5fa839dc6",
    measurementId: "G-BP2G884TLB"
});

const auth = firebase.auth();

export { auth };