// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0wJUn-FIwetZTfPolNklz0NHV7AKaENE",
  authDomain: "my-portfolio-f3107.firebaseapp.com",
  projectId: "my-portfolio-f3107",
  storageBucket: "my-portfolio-f3107.appspot.com",
  messagingSenderId: "265407310518",
  appId: "1:265407310518:web:0893e6f15e60c009229417",
  measurementId: "G-VQL5ESJ2YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);