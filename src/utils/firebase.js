// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsPVxjMhSDWAAukLVgfGxn-09FsLO3Ibk",
  authDomain: "netflixgpt-31772.firebaseapp.com",
  projectId: "netflixgpt-31772",
  storageBucket: "netflixgpt-31772.appspot.com",
  messagingSenderId: "959591008946",
  appId: "1:959591008946:web:02cfaf73582bce6f06d7ab",
  measurementId: "G-F0FLPEQQVG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
