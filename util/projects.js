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

const projectConstraints = {
  title: {
    presence: { allowEmpty: false },
    type: 'string',
    length: {
      minimum: 1,
      maximum: 200,
    },
  },
  description: {
    presence: { allowEmpty: false },
    type: 'string',
    length: {
      minimum: 1,
      maximum: 2000,
    },
  },
  status: {
    presence: { allowEmpty: false },
    type: 'string',
    inclusion: {
      within: ['active', 'inactive', 'pending-review'],
    },
  },
  mission: {
    presence: { allowEmpty: false },
    type: 'string',
    length: {
      minimum: 1,
      maximum: 2000,
    },
  },
  survey: {
    presence: { allowEmpty: false },
  },
  'survey.features': {
    presence: { allowEmpty: false },
  },
  deadline: {
    presence: { allowEmpty: false },
  },
  type: {
    presence: { allowEmpty: false },
  },
  tags: {
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

export const addProject = (projectData) => {
  const errors = validate(projectData, projectConstraints);
  if (errors) {
    throw errors;
  }
  return addDoc(collection(db, 'projects'), projectData);
};

export const getProject = async (projectId) => {
  const docSnap = await getDoc(doc(db, 'projects', projectId));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const getProjects = async () => {
  const querySnapshot = await getDocs(collection(db, 'projects'));
  const projects = [];
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  return projects;
};

export const updateProject = async (projectId, projectData) => {
  const errors = validate(projectData, projectConstraints);
  if (errors) {
    return errors;
  }
  return updateDoc(doc(db, 'projects', projectId), projectData);
};

export const getUserProjects = async (userId) => {
  console.log('getting projects for', userId);
  const q = query(collection(db, 'projects'), where('userId', '==', userId));
  const querySnapshot = await getDocs(q);
  const projects = [];
  querySnapshot.forEach((doc) => {
    projects.push({ id: doc.id, ...doc.data() });
  });
  return projects;
};

export const getCompanyProjects = async (companyId) => {
  const q = query(
    collection(db, 'projects'),
    where('companyId', '==', companyId)
  );
  const querySnapshot = await getDocs(q);
  const projects = [];
  querySnapshot.forEach((doc) => {
    projects.push(doc.data());
  });
  return projects;
};
