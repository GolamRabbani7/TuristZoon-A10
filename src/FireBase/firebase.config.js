// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp5xIqGcDyCdQYnTDDYfsE1CrwDcwNen4",
  authDomain: "turistzoon-a10.firebaseapp.com",
  projectId: "turistzoon-a10",
  storageBucket: "turistzoon-a10.appspot.com",
  messagingSenderId: "986500762150",
  appId: "1:986500762150:web:7f109738b753ea4ca834e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;
