// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbBeLEQ9OMbtyr66wWPQjVKrd1Z047__E",
  authDomain: "cs-database-6845c.firebaseapp.com",
  projectId: "cs-database-6845c",
  storageBucket: "cs-database-6845c.appspot.com",
  messagingSenderId: "523070850274",
  appId: "1:523070850274:web:35f9d6c133d89160808abb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);