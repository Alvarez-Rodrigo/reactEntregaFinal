// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyJQrX7oI4-HsVzIK_4bTggK-jOFKp0-Q",
  authDomain: "coderhouse-ecommer.firebaseapp.com",
  projectId: "coderhouse-ecommer",
  storageBucket: "coderhouse-ecommer.appspot.com",
  messagingSenderId: "738306003891",
  appId: "1:738306003891:web:e375ee5803e29ff6edb1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);