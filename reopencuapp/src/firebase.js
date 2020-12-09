import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyA28otdTul8yjbdwMc-p7qobYIaM57Mk2o',
  authDomain: 'clone-3ac3a.firebaseapp.com',
  databaseURL: 'https://clone-3ac3a.firebaseio.com',
  projectId: 'clone-3ac3a',
  storageBucket: 'clone-3ac3a.appspot.com',
  messagingSenderId: '969464125097',
  appId: '1:969464125097:web:d8833d445fb9679c677bb8',
  measurementId: 'G-PDEJ2GZG5V'
})

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
