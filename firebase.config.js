// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCh-Lst26WNHC-XwEavesd7F5hZQUPqS4I",
  authDomain: "fir-frontend-8405a.firebaseapp.com",
  projectId: "fir-frontend-8405a",
  storageBucket: "fir-frontend-8405a.appspot.com",
  messagingSenderId: "522186407904",
  appId: "1:522186407904:web:2a03bde340522c1b293585",
  measurementId: "G-N8XF1H9WWS",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
const analytics = getAnalytics(app);
