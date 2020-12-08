import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDt6F9Mgtv3GJ8L_yZw6gSAP-qp0e-iVxQ",
    authDomain: "crwn-db-f7750.firebaseapp.com",
    projectId: "crwn-db-f7750",
    storageBucket: "crwn-db-f7750.appspot.com",
    messagingSenderId: "175199530763",
    appId: "1:175199530763:web:edafd242230ae8c855fc0e",
    measurementId: "G-RTDFVR7BCB"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;