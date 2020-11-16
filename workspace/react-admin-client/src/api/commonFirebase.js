import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyCWcZetRcxwjGgZBQCFCzKW3c7RjXPQsu0",
    authDomain: "cs385-team07-don-t-let-me-die.firebaseapp.com",
    databaseURL: "https://cs385-team07-don-t-let-me-die.firebaseio.com",
    projectId: "cs385-team07-don-t-let-me-die",
    storageBucket: "cs385-team07-don-t-let-me-die.appspot.com",
    messagingSenderId: "832423928995",
    appId: "1:832423928995:web:9ca34c01fc199786188b16",
    measurementId: "G-6FRHG613NM"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;