import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAa8atbXwwofrRgmHHXTcnvAiyVvMv2Oyo",
  authDomain: "biosync-32e95.firebaseapp.com",
  projectId: "biosync-32e95",
  storageBucket: "biosync-32e95.firebasestorage.app",
  messagingSenderId: "873929644381",
  appId: "1:873929644381:web:d4f9bf98d2d32103c9b0b4",
  measurementId: "G-T1RVV2X796"
};

const app = initializeApp(firebaseConfig);

// Firestore (Banco de dados)
const db = getFirestore(app);

// Auth (Autenticação)
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword };