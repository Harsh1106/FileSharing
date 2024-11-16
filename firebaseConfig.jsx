// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmp4BXDYq9uz1IhEqoEjVYhjnv_EHLrIc",
  authDomain: "transferhub-f4238.firebaseapp.com",
  projectId: "transferhub-f4238",
  storageBucket: "transferhub-f4238.firebasestorage.app",
  messagingSenderId: "702845284105",
  appId: "1:702845284105:web:1511a57a8e9a7106146dd8",
  measurementId: "G-CZMDCZDH5H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);