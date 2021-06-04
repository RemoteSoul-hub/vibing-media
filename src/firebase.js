import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMa9mbLeTe7EPxRK098YMgzrY_01CT-Ko",
    authDomain: "vibing-media.firebaseapp.com",
    projectId: "vibing-media",
    storageBucket: "vibing-media.appspot.com",
    messagingSenderId: "455183097038",
    appId: "1:455183097038:web:119226483759b0d66f049f",
    measurementId: "G-P0VQQF2MT4"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;