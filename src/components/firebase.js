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
  apiKey: "AIzaSyDy-0XY4SmTUGzIx1ay_AWpYbyqFf5a4bM",
  authDomain: "myobdb-87de1.firebaseapp.com",
  projectId: "myobdb-87de1",
  storageBucket: "myobdb-87de1.appspot.com",
  messagingSenderId: "6117910534",
  appId: "1:6117910534:web:d5fda4dbf1d28ecf5cbb87"
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

