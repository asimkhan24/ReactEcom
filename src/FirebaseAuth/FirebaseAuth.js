
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyAlwzUE408q50lKEjFom-4dEy-Xa7YCRYk",
  authDomain: "akshopping-786.firebaseapp.com",
  projectId: "akshopping-786",
  storageBucket: "akshopping-786.appspot.com",
  messagingSenderId: "331509211645",
  appId: "1:331509211645:web:ee41bbfb8427da13edf994"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {app, auth, db};
