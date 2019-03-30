import firebase from 'firebase/app'
import 'firebase/auth'

function initFirebase (firebase) {
  const config = {
    apiKey: 'AIzaSyBYdi2DBaZWkyAf0nn2qRIALBg6xN2Qmrg',
    authDomain: 'micro-course-react.firebaseapp.com',
    databaseURL: 'https://micro-course-react.firebaseio.com',
    projectId: 'micro-course-react',
    storageBucket: 'micro-course-react.appspot.com',
    messagingSenderId: '418796461829'
  }

  firebase.initializeApp(config)
}

initFirebase(firebase)

const adapter = {
  getInstance: () => firebase,
  getAuth: () => firebase.auth
}

export default adapter
