import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCpIULXhtdN2Ga65G65vk3qjvWp-gQQuj8",
    authDomain: "myobd-9bddd.firebaseapp.com",
    projectId: "myobd-9bddd",
    storageBucket: "myobd-9bddd.appspot.com",
    messagingSenderId: "538923119712",
    appId: "1:538923119712:web:08df9b61b97c0673f97f05"
  };


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}

