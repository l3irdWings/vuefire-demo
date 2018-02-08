import {initializeApp} from 'firebase'

const app = initializeApp(
  {
    apiKey: 'AIzaSyB7SogJw-xO10wsG_iWvNWzH7RQRwsXJ3Y',
    authDomain: 'vue-firebase-demo-52b27.firebaseapp.com',
    databaseURL: 'https://vue-firebase-demo-52b27.firebaseio.com',
    projectId: 'vue-firebase-demo-52b27',
    storageBucket: 'vue-firebase-demo-52b27.appspot.com',
    messagingSenderId: '967017213223'
  }
)

export const db = app.database()
export const messageRef = db.ref('message')
