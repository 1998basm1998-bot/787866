import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: atob("QUl6YVN5Q1JIMUFzOHpQRS1qYnQydmZuRGE2aUhtVlRBcmVvQ09F"),
    authDomain: "dfdk-d99c9.firebaseapp.com",
    projectId: "dfdk-d99c9",
    storageBucket: "dfdk-d99c9.firebasestorage.app",
    messagingSenderId: "615222975065",
    appId: "1:615222975065:web:1ce18526be1db66346af48"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
