// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: 'AIzaSyDpRBr9__3vUgG0ooPXG-eX0kYxJV2TZ2c',
	authDomain: 'panacea-firebase-auth.firebaseapp.com',
	projectId: 'panacea-firebase-auth',
	storageBucket: 'panacea-firebase-auth.appspot.com',
	messagingSenderId: '526197583494',
	appId: '1:526197583494:web:b3e2ce7b4d41110308eb07',
	measurementId: 'G-9B7LF4ZT79',
};
// const firebaseConfig = {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: "",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
