// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOask3VCmNXZiNUzG7frvB5g1tf-o69Ms",
  authDomain: "namastenetflixgpt.firebaseapp.com",
  projectId: "namastenetflixgpt",
  storageBucket: "namastenetflixgpt.appspot.com",
  messagingSenderId: "807665246870",
  appId: "1:807665246870:web:61e260aff5684a064f58b7",
  measurementId: "G-9FCMZCRH08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
