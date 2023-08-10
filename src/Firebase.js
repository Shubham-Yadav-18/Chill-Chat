import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import  { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCDx-PWSc4xYvHVE7Ry4B8rN9p97KYnKeY",
  authDomain: "chill-chat-8df5a.firebaseapp.com",
  projectId: "chill-chat-8df5a",
  storageBucket: "chill-chat-8df5a.appspot.com",
  messagingSenderId: "505725309261",
  appId: "1:505725309261:web:1f0815f7c65617c9efa704"
};
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
 export const storage = getStorage();
 export const db = getFirestore();