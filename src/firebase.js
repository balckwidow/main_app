// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey:process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "practice-6a012.firebaseapp.com",
  projectId: "practice-6a012",
  storageBucket: "practice-6a012.appspot.com",
  messagingSenderId: "1035240403483",
  appId: "1:1035240403483:web:4ac7173fb35e01a4f67ebe",
  measurementId: "G-RH32WXJX4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
export const db=getFirestore(app);
export const storage=getStorage(app);
