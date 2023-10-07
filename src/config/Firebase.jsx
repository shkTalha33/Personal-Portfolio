// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDf2qJ-C5OxTytvJSuNWi0WX2lFQJfKaM",
  authDomain: "talhafolio-33.firebaseapp.com",
  projectId: "talhafolio-33",
  storageBucket: "talhafolio-33.appspot.com",
  messagingSenderId: "203474638710",
  appId: "1:203474638710:web:27100daf2791434cc14c57",
  measurementId: "G-37ZR30VQL0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const firestore = getFirestore(app);
const auth = getAuth(app);

export {analytics,firestore,storage,auth}