
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBUxr9XVDQDoK4cvhxhytHy4T2DXsX5Zg0",
  authDomain: "study-together-10951.firebaseapp.com",
  projectId: "study-together-10951",
  storageBucket: "study-together-10951.appspot.com",
  messagingSenderId: "811919426027",
  appId: "1:811919426027:web:f8195bbdfb5ef69da799ae"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;