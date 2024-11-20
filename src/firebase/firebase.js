import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAytAAPqIZXxwF3I_UBXCdR8dg3nsRn8_g",
  authDomain: "insta-clone-8a86c.firebaseapp.com",
  projectId: "insta-clone-8a86c",
  storageBucket: "insta-clone-8a86c.firebasestorage.app",
  messagingSenderId: "178601696378",
  appId: "1:178601696378:web:69aa4f75a0925da2ce6fc3",
  measurementId: "G-RF9HNMDC5P"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export {app,auth, firestore, storage };
