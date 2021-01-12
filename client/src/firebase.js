import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChkRakfwbWeJFbnogCVsu6adSr2oegrbo",
  authDomain: "esoteric-medicine.firebaseapp.com",
  projectId: "esoteric-medicine",
  storageBucket: "esoteric-medicine.appspot.com",
  messagingSenderId: "921177949793",
  appId: "1:921177949793:web:229060ce01dd957cbd4c20",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
