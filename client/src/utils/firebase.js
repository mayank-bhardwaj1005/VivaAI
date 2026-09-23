// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "vivaai-22d4e.firebaseapp.com",
  projectId: "vivaai-22d4e",
  storageBucket: "vivaai-22d4e.firebasestorage.app",
  messagingSenderId: "581743055487",
  appId: "1:581743055487:web:4edda2a29fd0232b39a54a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };