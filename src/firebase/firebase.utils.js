import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: "AIzaSyCrwepmc3qbY3iPv9r4037dZzEATfaj85c",
	authDomain: "crwn-db-99016.firebaseapp.com",
	projectId: "crwn-db-99016",
	storageBucket: "crwn-db-99016.appspot.com",
	messagingSenderId: "61193324151",
	appId: "1:61193324151:web:0be299a79d09eefd97a872",
	measurementId: "G-61M4C2WG17"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// export default firebase;