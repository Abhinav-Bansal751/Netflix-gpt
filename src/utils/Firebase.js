// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9dyfufzbMgQdft6l6m-5EaTBIBDQoJZ0",
  authDomain: "netflixgpt-db0dd.firebaseapp.com",
  projectId: "netflixgpt-db0dd",
  storageBucket: "netflixgpt-db0dd.appspot.com",
  messagingSenderId: "725540949312",
  appId: "1:725540949312:web:8a9e6fa42a62ed14043ea5",
  measurementId: "G-ECB3R8MRGD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();