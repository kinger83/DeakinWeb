import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {

    apiKey: "AIzaSyDGgCVOA7ko9xRXX0SzEGOHw8-MZ7XNFaQ",

    authDomain: "deakin-web-app-907a1.firebaseapp.com",

    projectId: "deakin-web-app-907a1",

    storageBucket: "deakin-web-app-907a1.appspot.com",

    messagingSenderId: "416201670049",

    appId: "1:416201670049:web:d7fd422ed48d33cfdf9fe0"

};



const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapShot = await getDoc(userDocRef);
    if(!userSnapShot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.log(error.message);
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async  (email, password) => {
    if(!email || !password) return;
    
    return createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async(email, password) => {
    if(!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

