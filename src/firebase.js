
// Your web app's Firebase configuration

import firebase from 'firebase/compat/app'
import  'firebase/compat/firestore'
// import  {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbsjW2PrLNdTN-wSybuVCSAjWZrhDw9wA",
  authDomain: "react-hooks-blog-3858e.firebaseapp.com",
  projectId: "react-hooks-blog-3858e",
  storageBucket: "react-hooks-blog-3858e.appspot.com",
  messagingSenderId: "461928775545",
  appId: "1:461928775545:web:72b769d608a9cd5bbe79a8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();



// const firebaseConfig = {
//     apiKey: "AIzaSyDW9Vqiu0JMoHEe7Xs0HDa9X3KN7hxUjWQ",
//     authDomain: "urecomapp.firebaseapp.com",
//     projectId: "urecomapp",
//     storageBucket: "urecomapp.appspot.com",
//     messagingSenderId: "326557543596",
//     appId: "1:326557543596:web:743f8f579c135b4171c309",
//   };
  
//   const firebaseApp = initializeApp(firebaseConfig);
  
//   const firestore = getFirestore(firebaseApp)