import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvz2l299ub8tAS1J_iXwL8u3t-8z0dlV4",
  authDomain: "olganovodzinskaya.firebaseapp.com",
  projectId: "olganovodzinskaya",
  storageBucket: "olganovodzinskaya.appspot.com",
  messagingSenderId: "457266901163",
  appId: "1:457266901163:web:e46cf3d70b9942d61507ee",
  measurementId: "G-Q8NSV2842Q",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const realEstateCol = collection(db, "realestate");

export const getRealEstate = () => {
  return getDocs(realEstateCol).then((response) =>
    response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};