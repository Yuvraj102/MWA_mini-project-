// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5rwodpSFeckEoBM3nQNkkvQd_WrsF-so",
  authDomain: "waste-mang.firebaseapp.com",
  projectId: "waste-mang",
  storageBucket: "waste-mang.appspot.com",
  messagingSenderId: "810149910204",
  appId: "1:810149910204:web:051f272dc353690edde2b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);