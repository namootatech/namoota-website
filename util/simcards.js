import { db } from './firebase';
import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  addDoc,
} from 'firebase/firestore';
import validate from 'validate.js';

const simcardConstraints = {
  selectedSims: {
    presence: { allowEmpty: false },
    type: 'array',
  },
  deliveryDetails: {
    presence: { allowEmpty: false },
    type: 'object',
    length: {
      minimum: 1,
      maximum: 200,
    },
  },
  status: {
    presence: { allowEmpty: false },
    type: 'string',
    inclusion: {
      within: [
        'paid',
        'unpaid',
        'pending-processing',
        'being-processed',
        'out-for-delivery',
      ],
    },
  },
  paymentId: {
    presence: { allowEmpty: false },
    type: 'string',
    length: {
      minimum: 1,
      maximum: 2000,
    },
  },
  paymentProvider: {
    presence: { allowEmpty: false },
  },
  userId: {
    presence: { allowEmpty: false },
    type: 'string',
    length: {
      minimum: 1,
      maximum: 100,
    },
  },
};

export const addSimcard = (simcardData) => {
  const errors = validate(simcardData, simcardConstraints);
  if (errors) {
    throw errors;
  }
  return addDoc(collection(db, 'simcards'), simcardData);
};

export const getSimcard = async (simcardId) => {
  const docSnap = await getDoc(doc(db, 'simcards', simcardId));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const getSimcards = async () => {
  const querySnapshot = await getDocs(collection(db, 'simcards'));
  const simcards = [];
  querySnapshot.forEach((doc) => {
    simcards.push(doc.data());
  });
  return simcards;
};

export const updateSimcard = async (simcardId, simcardData) => {
  const errors = validate(simcardData, simcardConstraints);
  if (errors) {
    return errors;
  }
  return updateDoc(doc(db, 'simcards', simcardId), simcardData);
};

export const getUserSimcards = async (userId) => {
  console.log('getting simcards for', userId);
  const q = query(collection(db, 'simcards'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const simcards = [];
  querySnapshot.forEach((doc) => {
    simcards.push({ id: doc.id, ...doc.data() });
  });
  return simcards;
};

export const getCompanySimcards = async (companyId) => {
  const q = query(
    collection(db, 'simcards'),
    where('companyId', '==', companyId)
  );
  const querySnapshot = await getDocs(q);
  const simcards = [];
  querySnapshot.forEach((doc) => {
    simcards.push(doc.data());
  });
  return simcards;
};
