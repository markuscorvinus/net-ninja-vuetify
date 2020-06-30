import firebase from 'firebase/app'
import 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA15GFKNRRHtKiTkUSoDRHrxCXzMv36Z8Y",
    authDomain: "ninja-vuetify-d36d7.firebaseapp.com",
    databaseURL: "https://ninja-vuetify-d36d7.firebaseio.com",
    projectId: "ninja-vuetify-d36d7",
    storageBucket: "ninja-vuetify-d36d7.appspot.com",
    messagingSenderId: "340794916795",
    appId: "1:340794916795:web:cf7141da0199a4c8558e9e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({timestampsInSnapshots: true})

export default db;