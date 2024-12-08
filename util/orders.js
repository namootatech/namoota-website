import { db } from './firebase';
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
  updateDoc,
  addDoc,
} from 'firebase/firestore';
import validate from 'validate.js';

const orderConstraints = {
  simcards: {
    presence: { allowEmpty: false },
    type: 'array',
  },
  deliveryId: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  readableId: {
    presence: { allowEmpty: false },
    type: 'string',
  },
  status: {
    presence: { allowEmpty: false },
    type: 'string',
    inclusion: {
      within: [
        'pending',
        'paid',
        'unpaid',
        'pending-processing',
        'being-processed',
        'out-for-delivery',
      ],
    },
  },
  paymentId: {
    presence: { allowEmpty: true },
    type: 'string',
  },
  paymentMethod: {
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

export const addOrder = (orderData) => {
  const errors = validate(orderData, orderConstraints);
  if (errors) {
    throw errors;
  }
  return addDoc(collection(db, 'order'), orderData);
};

export const getOrder = async (orderId) => {
  const docSnap = await getDoc(doc(db, 'order', orderId));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const updateOrder = async (orderId, orderData) => {
  const errors = validate(orderData, orderConstraints);
  if (errors) {
    return errors;
  }
  return updateDoc(doc(db, 'order', orderId), orderData);
};

export const getUserOrder = async (userId) => {
  console.log('getting order for', userId);
  const q = query(collection(db, 'order'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const order = [];
  querySnapshot.forEach((doc) => {
    order.push({ id: doc.id, ...doc.data() });
  });
  return order;
};

export const getCompanyOrder = async (companyId) => {
  const q = query(collection(db, 'order'), where('companyId', '==', companyId));
  const querySnapshot = await getDocs(q);
  const order = [];
  querySnapshot.forEach((doc) => {
    order.push(doc.data());
  });
  return order;
};

export const saveUserDeliveryDetails = async (deliveryDetails) => {
  return await addDoc(collection(db, 'userDeliveryDetails'), deliveryDetails);
};
