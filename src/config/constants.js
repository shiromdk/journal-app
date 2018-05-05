
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyC30W4xIYxeHU09u5moUW2tPgUaY7v_HCQ",
    authDomain: "bjj-journal.firebaseapp.com",
    databaseURL: "https://bjj-journal.firebaseio.com",
};

firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
