import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyDtqNoM2bF8_Dyj1O9Zlp94hXzljszK6zw",
    authDomain: "don-t-let-me-die.firebaseapp.com",
    databaseURL: "https://don-t-let-me-die.firebaseio.com",
    projectId: "don-t-let-me-die",
    storageBucket: "don-t-let-me-die.appspot.com",
    messagingSenderId: "430686717248",
    appId: "1:430686717248:web:1a5ff798a609ef67e3e6a5",
    measurementId: "G-DG9PJVNRRK"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;