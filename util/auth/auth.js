import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { omit } from 'ramda';
import { db, auth } from '../firebase';

const googleProvider = new GoogleAuthProvider();

export const registerishaWithEmail = async (data) => {
  console.log("data", data);
  try {
    // Ensure auth is available
    if (!auth) {
      throw new Error('Firebase Auth is not initialized. Please ensure you are running this on the client side.');
    }
    
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const userId = userCredential.user.uid;

    const user = userCredential.user;
    const userDetails = omit(['password'], data);

    await setDoc(doc(db, 'users', userId), {
      ...userDetails,
      email: user.email,
      name: user.displayName || userDetails.displayName || 'Anonymous Beaver',
      profilePicUrl: user.photoURL || userDetails.photoURL || null,
      phone: user.phoneNumber || userDetails.phoneNumber || null,
      role: user.role || 'mgutyuli',
      createdAt: new Date().toISOString(),
    });

    return userCredential;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const registerishaWithGoogle = async () => {
  try {
    // Ensure auth is available
    if (!auth) {
      throw new Error('Firebase Auth is not initialized. Please ensure you are running this on the client side.');
    }
    
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userId = user.uid;
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', userId), {
        email: user.email,
        name: user.displayName || 'Anonymous Beaver',
        profilePicUrl: user.photoURL || null,
        phone: user.phoneNumber || null,
        indima: 'mgutyuli',
        createdAt: new Date().toISOString(),
      });
    }

    return result;
  } catch (error) {
    console.error('Error signing up with Google:', error);
    throw error;
  }
};

export const registerishaWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userId = user.uid;
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', userId), {
        email: user.email,
        name: user.displayName || 'Anonymous Beaver',
        profilePicUrl: user.photoURL || null,
        phone: user.phoneNumber || null,
        role: 'mgutyuli',
        createdAt: new Date().toISOString(),
      });
    }

    return result;
  } catch (error) {
    console.error('Error signing up with Google:', error);
    throw error;
  }
};

export const loga_in = async (email, password) => {
  try {
    // Ensure auth is available
    if (!auth) {
      throw new Error('Firebase Auth is not initialized. Please ensure you are running this on the client side.');
    }
    console.log("logging in with email and password", auth,email, password);
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const loga_inWithGoogle = async () => {
  try {
    // Ensure auth is available
    if (!auth) {
      throw new Error('Firebase Auth is not initialized. Please ensure you are running this on the client side.');
    }
    
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return result;
  } catch (error) {
    console.error('Error logging in with Google:', error);
    throw error;
  }
};

export const loga_inWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return result;
  } catch (error) {
    console.error('Error logging in with Google:', error);
    throw error;
  }
};
