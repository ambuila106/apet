import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCUoyX7UkTRum9VOSV31J9VCuEfw5tM19U",
    authDomain: "apet-1c6e6.firebaseapp.com",
    databaseURL: "https://apet-1c6e6-default-rtdb.firebaseio.com",
    projectId: "apet-1c6e6",
    storageBucket: "apet-1c6e6.appspot.com",
    messagingSenderId: "911735279378",
    appId: "1:911735279378:web:cb7a6cb7be4bbd7ff06dcb",
    measurementId: "G-CE0LBMWLQ1"
  };

firebase.initializeApp(firebaseConfig);



export default class Api {
    dbRef = firebase.database().ref();
    getDatabase(name) {
        return this.dbRef.child(name).get();
    }
}