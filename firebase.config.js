// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// No es necesario importar enableLogging si no lo vas a usar

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJm9fkGNwaMtHi5ChRDULA2UgLrFT8nvI",
  authDomain: "ranking-bp.firebaseapp.com",
  projectId: "ranking-bp",
  storageBucket: "ranking-bp.appspot.com",
  messagingSenderId: "1045536295453",
  appId: "1:1045536295453:web:27da7bdeee70b6ac8894f4",
  measurementId: "G-9HBZ9LWGLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

// No habilitar logging para la base de datos
// enableLogging(true); // Comentado o eliminado

export { auth, analytics, provider, database, storage };
