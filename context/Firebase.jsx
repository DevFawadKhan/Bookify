import {createContext,useContext} from 'react'
const FirebaseContext=createContext(null);
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD_xslKk_4OWp5jnwrjsvM8PrvjdsJ6mK8",
  authDomain: "bookify-7557f.firebaseapp.com",
  projectId: "bookify-7557f",
  storageBucket: "bookify-7557f.firebasestorage.app",
  messagingSenderId: "115201119523",
  appId: "1:115201119523:web:2320061e425a83d317e896"
};
const app = initializeApp(firebaseConfig);
export const FirebaseProvider=({children})=>{
    return <FirebaseContext.Provider>{children}</FirebaseContext.Provider>
}
export const useFireBase=()=>useContext(FirebaseContext);