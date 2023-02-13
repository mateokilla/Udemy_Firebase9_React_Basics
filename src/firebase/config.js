import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXt2GMwvRkF623orJ9jr-PPpREDl0ywBE",
  authDomain: "reading-list-d4f97.firebaseapp.com",
  projectId: "reading-list-d4f97",
  storageBucket: "reading-list-d4f97.appspot.com",
  messagingSenderId: "732351426085",
  appId: "1:732351426085:web:dcbf6ba42357ff928b99cc",
};

//init firebase
initializeApp(firebaseConfig);
//init firestore
const db = getFirestore();

//init firebase auth
const auth = getAuth();

export { db, auth };
