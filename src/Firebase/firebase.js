import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithPopup, 
    GithubAuthProvider,
    GoogleAuthProvider, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signOut,
    onAuthStateChanged,
 } from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAP4N55HpsR0DYMA_y94UBrsk_joYJSNhg",
  authDomain: "newsbucket-2d33b.firebaseapp.com",
  projectId: "newsbucket-2d33b",
  storageBucket: "newsbucket-2d33b.appspot.com",
  messagingSenderId: "566182171784",
  appId: "1:566182171784:web:67d210195bca1d0d02fb3d"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

const githubProvider = new GithubAuthProvider();
githubProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider); 
export const signInWithGitHub = () => signInWithPopup(auth, githubProvider); 

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth, additionalInfo={}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });
        }
        catch (error) {
            console.log('error occured creating user:', error.message)
        }
    }
    return userDocRef;
};

export const createNewUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) 
    return;
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) 
    return;
    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);