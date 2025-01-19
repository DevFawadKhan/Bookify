import {createContext,useContext, useState,useEffect } from 'react'
const FirebaseContext=createContext(null);
import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,onAuthStateChanged}from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD_xslKk_4OWp5jnwrjsvM8PrvjdsJ6mK8",
  authDomain: "bookify-7557f.firebaseapp.com",
  projectId: "bookify-7557f",
  storageBucket: "bookify-7557f.firebasestorage.app",
  messagingSenderId: "115201119523",
  appId: "1:115201119523:web:2320061e425a83d317e896"
};
const app = initializeApp(firebaseConfig);
const FireBaseAuth=getAuth(app);
const GoogleAuth=new GoogleAuthProvider();
const SignUpWithEmailAndPassword=(email,password)=>createUserWithEmailAndPassword(FireBaseAuth,email,password);
const SignInWithEmailAndPassword=(email,password)=>signInWithEmailAndPassword(FireBaseAuth,email,password);
const SigninWithGoogle=()=>signInWithPopup(FireBaseAuth,GoogleAuth);
export const FirebaseProvider=({children})=>{
  // implement the logic check the user or logedIn or not,
// using Auth state change; because hook only call in function components
 const [User,setUser] = useState(null)
useEffect(() => {
  onAuthStateChanged(FireBaseAuth,(user)=>{
    if(user) setUser(user)
    else setUser(null);
  })
},[])
 const ISLoggedIn=User ?true :false;
  return <FirebaseContext.Provider value={{SignUpWithEmailAndPassword,SignInWithEmailAndPassword,SigninWithGoogle,ISLoggedIn}}>{children}</FirebaseContext.Provider>
}
export  const useFireBase=()=>useContext(FirebaseContext);