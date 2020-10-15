import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCqhGrrYY-QfqY0xrPLz91fqwfIPAq-WCk",
    authDomain: "crwn-db-7d26b.firebaseapp.com",
    databaseURL: "https://crwn-db-7d26b.firebaseio.com",
    projectId: "crwn-db-7d26b",
    storageBucket: "crwn-db-7d26b.appspot.com",
    messagingSenderId: "160653164597",
    appId: "1:160653164597:web:bbdb3187e943f0cbca317c",
    measurementId: "G-KQ4S8LM34T"
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
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
