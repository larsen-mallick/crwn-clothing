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
  measurementId: "G-V1RKR10T84"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
