import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADroD8ppkxZLncst6LouFyK7HD1k9A-MY",
  authDomain: "dyeus-3e052.firebaseapp.com",
  projectId: "dyeus-3e052",
  storageBucket: "dyeus-3e052.appspot.com",
  messagingSenderId: "261929507212",
  appId: "1:261929507212:web:48b18fcdd65d0e4a6d5ea9",
  measurementId: "G-VJLSK7X7C4",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
