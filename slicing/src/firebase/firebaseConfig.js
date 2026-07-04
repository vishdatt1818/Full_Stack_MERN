// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2sWTZfEOr2ZrHyFDYTf55Tkd1dMcRoaY",
  authDomain: "fir-practice-fe8af.firebaseapp.com",
  projectId: "fir-practice-fe8af",
  storageBucket: "fir-practice-fe8af.firebasestorage.app",
  messagingSenderId: "320554633727",
  appId: "1:320554633727:web:a56214e85b5d8167843fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)