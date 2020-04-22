import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "react-ecommerce-7189c.firebaseapp.com",
    databaseURL: "https://react-ecommerce-7189c.firebaseio.com",
    projectId: "react-ecommerce-7189c",
    storageBucket: "react-ecommerce-7189c.appspot.com",
    messagingSenderId: "627167311682",
    appId: "1:627167311682:web:0d465a3e91f19b2931badb",
    measurementId: "G-V4VY79WMV6"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

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
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;