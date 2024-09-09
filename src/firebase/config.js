// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjQCSaBfNnJGD6edm4KsGvZXLQdNZBglI",
  authDomain: "olx-clone-4026d.firebaseapp.com",
  projectId: "olx-clone-4026d",
  storageBucket: "olx-clone-4026d.appspot.com",
  messagingSenderId: "718804647063",
  appId: "1:718804647063:web:70c59283d3158297c2fdd2",
  measurementId: "G-1YNW9BK8LJ"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const firestore = getFirestore(firebase);
export const auth = getAuth();
export const storage = getStorage(firebase);
