// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAqvxywSuLPoFtH2o-XAD0AUsqJ6jECnac",
  authDomain: "blog-website-fede2.firebaseapp.com",
  projectId: "blog-website-fede2",
  storageBucket: "blog-website-fede2.appspot.com",
  messagingSenderId: "692318884567",
  appId: "1:692318884567:web:c393a301a33281ebd0d692",
  measurementId: "G-W331J9HKNQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
