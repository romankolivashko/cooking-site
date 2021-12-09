import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCY5TwydZ3mI5fxORmTZcj6HDVmc2IbAPE",
  authDomain: "cooking-site-a32ba.firebaseapp.com",
  projectId: "cooking-site-a32ba",
  storageBucket: "cooking-site-a32ba.appspot.com",
  messagingSenderId: "538777660577",
  appId: "1:538777660577:web:869cb73c7110ff8b3094e0"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()

export { projectFirestore }