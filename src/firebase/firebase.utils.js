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

export const createUserProfileDocument=async (userAuth,additionalData)=>{
    if(!userAuth) return;

    const userRef=firestore.doc(`users/${userAuth.uid}`);
    //const userRef=firestore.doc('users/NowYllnM61cxTbMcZ8k0')
    const snapshot= await userRef.get();
    //console.log(snapshot);
    if(!snapshot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('Error Creating User', error.message);
        }

    }
    return userRef;
}

//firebase.initializeApp(config);

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 };

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;