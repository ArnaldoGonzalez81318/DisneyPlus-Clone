import firebase from "firebase/compat";
import "firebase/compat/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPXfY11_1SClUXMBzAlZPV-Kd4oLzsxt0",
  authDomain: "disneyplusclone-2fe7c.firebaseapp.com",
  projectId: "disneyplusclone-2fe7c",
  storageBucket: "disneyplusclone-2fe7c.appspot.com",
  messagingSenderId: "893487311192",
  appId: "1:893487311192:web:40325ee45fb9c6ef50dd2d",
  measurementId: "G-M92077Q1PW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;