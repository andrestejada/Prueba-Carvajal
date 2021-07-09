import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCFqD52JwK17fubA6g9bEWkpRDCVGe_P0E",
    authDomain: "carvajal-peliculas.firebaseapp.com",
    projectId: "carvajal-peliculas",
    storageBucket: "carvajal-peliculas.appspot.com",
    messagingSenderId: "278008440802",
    appId: "1:278008440802:web:793272549ce545d26bfbbb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage()
