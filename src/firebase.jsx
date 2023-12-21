// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC7UofFimVuUkf43llHhgLY05D-wk3a29k",
    authDomain: "chatrr-384c9.firebaseapp.com",
    projectId: "chatrr-384c9",
    storageBucket: "chatrr-384c9.appspot.com",
    messagingSenderId: "996965402565",
    appId: "1:996965402565:web:e7ec1c41b492936101edac"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore();