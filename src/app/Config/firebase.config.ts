// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDwYgFsH_2uv7Ofoy_kpWdncd8HXNXfs6Q",
  authDomain: "v2-484b3.firebaseapp.com",
  projectId: "v2-484b3",
  storageBucket: "v2-484b3.appspot.com",
  messagingSenderId: "23688003703",
  appId: "1:23688003703:web:d39f8ccfc34940fda9c672",
  measurementId: "G-HWEWQ00EBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);