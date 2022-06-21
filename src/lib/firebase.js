// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBU_WC5VPNoDpWOX5n5TT3mpEJquX1JrmY",
  authDomain: "fir-k63example.firebaseapp.com",
  projectId: "fir-k63example",
  storageBucket: "fir-k63example.appspot.com",
  messagingSenderId: "429707681522",
  appId: "1:429707681522:web:84ba99bcfc375fee08ba6b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);