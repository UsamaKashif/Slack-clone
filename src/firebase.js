// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase"


const firebaseConfig = {
  apiKey: "AIzaSyDNOQzw2Cpxic-Ni6mdQLyGTloDm23P1Z8",
  authDomain: "slack-clone-e4127.firebaseapp.com",
  projectId: "slack-clone-e4127",
  storageBucket: "slack-clone-e4127.appspot.com",
  messagingSenderId: "1034895948245",
  appId: "1:1034895948245:web:18dec18aeaf8dca201a55c",
  measurementId: "G-49JJY8XPQ6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export {db, auth, provider}