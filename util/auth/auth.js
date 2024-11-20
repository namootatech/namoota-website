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

export const signUpWithEmail = async (data) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    const userId = userCredential.user.uid;
    const user = userCredential.user;
    const userDetails = omit(['company', 'password'], data);

    await setDoc(doc(db, 'users', userId), {
      ...userDetails,
      email: user.email,
      name: user.displayName || 'Anonymous Beaver',
      photoUrl: user.photoURL || null,
      phoneNumber: user.phoneNumber || null,
      role: user.role || 'customer',
      createdAt: new Date().toISOString(),
    });

    if (data.company) {
      const companyId =
        data.company.name.toLowerCase().replace(/\s/g, '-') + '-' + userId;
      await setDoc(doc(db, 'companies', companyId), {
        ...data.company,
        name: data.company.name || 'Unnamed Company',
        industry: data.company.industry || 'General',
        ownerId: userId,
        createdAt: new Date().toISOString(),
      });
    }

    return userCredential;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Sign up/Login with Google
export const signUpWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const userId = user.uid;
    const userDoc = await getDoc(doc(db, 'users', userId));
    if (!userDoc.exists()) {
      await setDoc(doc(db, 'users', userId), {
        email: user.email,
        name: user.displayName || 'Anonymous Beaver',
        photoUrl: user.photoURL || null,
        phoneNumber: user.phoneNumber || null,
        role: 'customer',
        createdAt: new Date().toISOString(),
      });
    }

    return result;
  } catch (error) {
    console.error('Error signing up with Google:', error);
    throw error;
  }
};

export const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    return result;
  } catch (error) {
    console.error('Error logging in with Google:', error);
    throw error;
  }
};
