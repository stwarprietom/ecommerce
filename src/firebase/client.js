// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDACVCaohSwTcDkQLMs3GsGzIP4IsUJsnI",
  authDomain: "ecommerce5770.firebaseapp.com",
  projectId: "ecommerce5770",
  storageBucket: "ecommerce5770.appspot.com",
  messagingSenderId: "561254848323",
  appId: "1:561254848323:web:62e3f4cdc93f69885441f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)