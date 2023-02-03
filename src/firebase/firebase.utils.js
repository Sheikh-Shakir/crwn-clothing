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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get()
	console.log(snapShot);
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
			console.log('error creating user', error.message);
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