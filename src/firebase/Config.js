//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; //para la autenticacion
import { getFirestore } from "firebase/firestore"; //Nos da acceso a la base de datos

//TODO: Add SDKs for Firebase products that you want to use
//https://firebase.google.com/docs/web/setup#available-libraries

//Your web app's Firebase configuration
//For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEEj_N4EBZZyIsg8xc9Cvf4ptyzeuKqjU",
  authDomain: "autenticacion-dff8b.firebaseapp.com",
  projectId: "autenticacion-dff8b",
  storageBucket: "autenticacion-dff8b.appspot.com",
  messagingSenderId: "1098371996656",
  appId: "1:1098371996656:web:8efb728f9de8b103935b35",
  measurementId: "G-Z64LEDXLFL",
};

//Initialize Firebase

export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const db = getFirestore(FirebaseApp);

// import firebase from "firebase/app";
// import "firebase/firestore";

// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://support.google.com/firebase/answer/7015592
// const firebaseConfig = {
//   apiKey: "AIzaSyAEEj_N4EBZZyIsg8xc9Cvf4ptyzeuKqjU",
//   authDomain: "autenticacion-dff8b.firebaseapp.com",
//   projectId: "autenticacion-dff8b",
//   storageBucket: "autenticacion-dff8b.appspot.com",
//   messagingSenderId: "1098371996656",
//   appId: "1:1098371996656:web:8efb728f9de8b103935b35",
//   measurementId: "G-Z64LEDXLFL",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// // Initialize Cloud Firestore and get a reference to the service
// export const db = firebase.firestore();
