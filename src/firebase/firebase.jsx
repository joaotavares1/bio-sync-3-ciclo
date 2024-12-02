import { initializeApp } from 'firebase/app';
import { getAuth,  GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
    apiKey: "AIzaSyAa8atbXwwofrRgmHHXTcnvAiyVvMv2Oyo",
    authDomain: "biosync-32e95.firebaseapp.com",
    projectId: "biosync-32e95",
    storageBucket: "biosync-32e95.appspot.com",
    messagingSenderId: "873929644381",
    appId: "1:873929644381:web:d4f9bf98d2d32103c9b0b4",
    measurementId: "G-T1RVV2X796"
};

const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider('B8291FB9-05ED-45E1-ABCB-6BE9D3EE0317'),
  isTokenAutoRefreshEnabled: true
});

const auth = getAuth(app);

const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };