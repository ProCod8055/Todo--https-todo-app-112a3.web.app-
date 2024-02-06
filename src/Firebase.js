// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
    
//   };

import firebase from "firebase";


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcpJXBKTHQWy3Eb_5ww5y0jJGBtEIWgyk",
    authDomain: "todo-app-112a3.firebaseapp.com",
    projectId: "todo-app-112a3",
    storageBucket: "todo-app-112a3.appspot.com",
    messagingSenderId: "270774967021",
    appId: "1:270774967021:web:5cdfd3d33a97958a68cae4",
    measurementId: "G-1JZ58R440X"
});

const db = firebase.firestore();

export default db;