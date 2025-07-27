// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB4oFi4fUwBxl_xUj_5jme9jnKg-lOdCIs",
  authDomain: "portfolio-c1162.firebaseapp.com",
  projectId: "portfolio-c1162",
  storageBucket: "portfolio-c1162.appspot.com", // ✅ Fixed here
  messagingSenderId: "1023340844711",
  appId: "1:1023340844711:web:bb04c99c1e840ab55aad82",
  measurementId: "G-V1ES7DCLBJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
