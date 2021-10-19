import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBe2nXDjyjOlU7G78hRD72f7Wecs3fuuhY",
    authDomain: "hosting-c192f.firebaseapp.com",
    projectId: "hosting-c192f",
    storageBucket: "hosting-c192f.appspot.com",
    messagingSenderId: "192608563410",
    appId: "1:192608563410:web:0b4fe3549b9debc68f3d0b"
});

export const db = getFirestore();

