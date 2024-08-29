/* eslint-disable prettier/prettier */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Import other services as needed

 export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);
