import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCVMFCG8LNGJfKsqmsbCOwBwCnq0lr_5j8",
  authDomain: "crwn-db-d557d.firebaseapp.com",
  projectId: "crwn-db-d557d",
  storageBucket: "crwn-db-d557d.appspot.com",
  messagingSenderId: "334607399038",
  appId: "1:334607399038:web:7925c389d4e2914a76002f",
  measurementId: "G-MHGXHSXTF4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;