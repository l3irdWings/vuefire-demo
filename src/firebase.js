import {initializeApp} from 'firebase'

let config = {
  apiKey: 'AIzaSyB7SogJw-xO10wsG_iWvNWzH7RQRwsXJ3Y',
  authDomain: 'vue-firebase-demo-52b27.firebaseapp.com',
  databaseURL: 'https://vue-firebase-demo-52b27.firebaseio.com',
  projectId: 'vue-firebase-demo-52b27',
  storageBucket: 'vue-firebase-demo-52b27.appspot.com',
  messagingSenderId: '967017213223'
}

require('firebase/firestore')

const app = initializeApp(config)

export const database = app.database()
export const storage = app.storage()
export const firestore = app.firestore()
