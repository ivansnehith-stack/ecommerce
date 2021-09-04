import firebase from "firebase";

// web app's firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDH2ZiQ88gFVUM-G1xAtpmnnOQqtgCwQKg",
	authDomain: "fir-32913.firebaseapp.com",
	projectId: "fir-32913",
	storageBucket: "fir-32913.appspot.com",
	messagingSenderId: "972215793106",
	appId: "1:972215793106:web:e2b765de8e9f9680cb840b",
};

//Initialize firebase with above config
firebase.initializeApp(firebaseConfig);

//export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
