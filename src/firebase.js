// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBW0WMUWztiLOHlAM-d_aZjzaOdQ98izGk",
  authDomain: "clone-af139.firebaseapp.com",
  projectId: "clone-af139",
  storageBucket: "clone-af139.appspot.com",
  messagingSenderId: "54992337802",
  appId: "1:54992337802:web:420af4e24c4b61b8e36673",
  measurementId: "G-DYQYMX3G38",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
