// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';
import {
  connectFirestoreEmulator,
  initializeFirestore,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBM70qNKTNSCYEJvf8_YUQVbLEe7PDeAOU',
  authDomain: 'namoota-bb3f9.firebaseapp.com',
  projectId: 'namoota-bb3f9',
  storageBucket: 'namoota-bb3f9.firebasestorage.app',
  messagingSenderId: '593991572759',
  appId: '1:593991572759:web:9ea9b60a4d4030551c6b52',
  measurementId: 'G-MBRKVPZ1R6',
};

export const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  useFetchStreams: false,
});

console.log('Environment is ', process.env.NODE_ENV);
console.log('Window Type is ', typeof window);

let firebaseAnalytics;
let firebaseaAuth;

if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  firebaseAnalytics = getAnalytics(app);
  firebaseaAuth = getAuth(app);
  connectFirestoreEmulator(db, 'localhost', 3005);
  connectAuthEmulator(firebaseaAuth, 'http://localhost:9099');
  connectStorageEmulator(storage, 'localhost', 9199);
}

export const analytics = firebaseAnalytics;
export const auth = firebaseaAuth;
