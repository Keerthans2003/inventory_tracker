// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzwSMRXLViTEPNGzKkEuW6-I0pUU3dig8",
  authDomain: "inventory-management-d99e6.firebaseapp.com",
  projectId: "inventory-management-d99e6",
  storageBucket: "inventory-management-d99e6.appspot.com",
  messagingSenderId: "758254884992",
  appId: "1:758254884992:web:7aebdb0044c11659b92e65",
  measurementId: "G-4FDQGXHJ6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };