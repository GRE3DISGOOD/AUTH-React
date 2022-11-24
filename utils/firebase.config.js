import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-44fb4.firebaseapp.com",
  projectId: "react-firebase-redux-44fb4",
  storageBucket: "react-firebase-redux-44fb4.appspot.com",
  messagingSenderId: "798167220134",
  appId: "1:798167220134:web:6569ebf43d938eb79a5967",
  measurementId: "G-27JMGDVWS5"});

  export const auth = app.auth();
  export default app;


