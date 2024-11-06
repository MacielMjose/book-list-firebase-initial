// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8G3hj4-Uy1m92wKYk7tgTjaQXCjrH1Xg",
  authDomain: "book-list-with-firebase-6f939.firebaseapp.com",
  projectId: "book-list-with-firebase-6f939",
  storageBucket: "book-list-with-firebase-6f939.firebasestorage.app",
  messagingSenderId: "219012839505",
  appId: "1:219012839505:web:bd7d342022a85ac7e9a070",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
