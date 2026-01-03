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
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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

// Initialize auth - it's safe to call getAuth on server side, it just won't work until client side
firebaseaAuth = getAuth(app);

if (typeof window !== 'undefined') {
  // Only initialize analytics on client side
  firebaseAnalytics = getAnalytics(app);
  
  // Connect to emulators only in development and only once
  if (process.env.NODE_ENV === 'development') {
    try {
      // Use a flag to prevent multiple connections
      if (!window.__firebaseEmulatorsConnected) {
        connectFirestoreEmulator(db, 'localhost', 3005);
        connectAuthEmulator(firebaseaAuth, 'http://localhost:9099');
        connectStorageEmulator(storage, 'localhost', 9199);
        window.__firebaseEmulatorsConnected = true;
        console.log('Firebase emulators connected');
      }
    } catch (error) {
      // Emulators might already be connected, ignore the error
      console.warn('Emulator connection warning:', error.message);
      window.__firebaseEmulatorsConnected = true; // Mark as connected even if error
    }
  }
}

console.log('Firebase Auth is ', firebaseaAuth);
console.log('Firebase Analytics is ', firebaseAnalytics);

export const analytics = firebaseAnalytics;
export const auth = firebaseaAuth;
