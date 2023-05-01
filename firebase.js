// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCyrDJErgbrIvRxiOAcRTmcLK6zpIzcXUo",
  authDomain: "antw-bb416.firebaseapp.com",
  projectId: "antw-bb416",
  storageBucket: "antw-bb416.appspot.com",
  messagingSenderId: "214088432606",
  appId: "1:214088432606:web:9813671f4bdaf014ed7b4f",
  measurementId: "G-8TLRMNZSC3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
