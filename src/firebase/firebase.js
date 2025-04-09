



import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, collection, addDoc, query, getDocs } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// ✅ Firebase Config
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY?.replace(/^"|"$/g, ""),
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN?.replace(/^"|"$/g, ""),
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID?.replace(/^"|"$/g, ""),
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET?.replace(/^"|"$/g, ""),
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID?.replace(/^"|"$/g, ""),
  appId: process.env.REACT_APP_FIREBASE_APP_ID?.replace(/^"|"$/g, ""),
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID?.replace(/^"|"$/g, ""),
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage, doc, setDoc, getDoc, collection, addDoc, query, getDocs };
