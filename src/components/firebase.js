import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";




const firebaseConfig = {
  apiKey: "AIzaSyCpIULXhtdN2Ga65G65vk3qjvWp-gQQuj8",
  authDomain: "myobd-9bddd.firebaseapp.com",
  projectId: "myobd-9bddd",
  storageBucket: "myobd-9bddd.appspot.com",
  messagingSenderId: "538923119712",
  appId: "1:538923119712:web:08df9b61b97c0673f97f05"
  };


  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  



  const logInWithEmailAndPassword = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Sign in successfull")
      
    } catch (err) {
      console.error(err);
      alert(err.message);
      alert("Sign in unsucessfull")
    }
  };


  const registerWithEmailAndPassword = async (name, email, password) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
        role: "user",
        password
      });
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const sendPasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset link sent!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const logout = () => {
      signOut(auth);
  } 

  

  export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    logout,
  };

