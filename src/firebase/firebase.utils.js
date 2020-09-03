import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDmAf82y_vZn5jqYVOGFv-pGwuokIuIpl0",
  authDomain: "crwn-db-7b9cd.firebaseapp.com",
  databaseURL: "https://crwn-db-7b9cd.firebaseio.com",
  projectId: "crwn-db-7b9cd",
  storageBucket: "crwn-db-7b9cd.appspot.com",
  messagingSenderId: "983154094484",
  appId: "1:983154094484:web:cd91b123ef29e0b7c85f81",
  measurementId: "G-V1RKR10T84",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
