import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyASW84-o8TjPlbPIMTCP4zGGMDoduwbeH0",
  authDomain: "crwn-db-bed27.firebaseapp.com",
  databaseURL: "https://crwn-db-bed27.firebaseio.com",
  projectId: "crwn-db-bed27",
  storageBucket: "crwn-db-bed27.appspot.com",
  messagingSenderId: "909247034140",
  appId: "1:909247034140:web:40cb519edd93f1fae580d9",
  measurementId: "G-8FY4GX905B",
};

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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
