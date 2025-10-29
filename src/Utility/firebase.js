import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {

apiKey: "AIzaSyBKz191hMoO5WjkrMGyySsOmF84gajSI7Q",
  authDomain: "clone-b458a.firebaseapp.com",
  projectId: "clone-b458a",
  storageBucket: "clone-b458a.firebasestorage.app",
  messagingSenderId: "1087006900011",
  appId: "1:1087006900011:web:86e79bc5193769dedf4f6e"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();



