import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCAeloFti5kaEXJyssV4olvcmjWRu67RAQ',
  authDomain: 'music-ff6fd.firebaseapp.com',
  projectId: 'music-ff6fd',
  storageBucket: 'music-ff6fd.appspot.com',
  appId: '1:490690225707:web:915cbbe0fc8344fabcec6e'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, db, usersCollection }
