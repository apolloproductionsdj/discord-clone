import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB3Xurp7d-RyrpOp7O6LNugJp0eXpgKJHM",
    authDomain: "discord-clone-59406.firebaseapp.com",
    databaseURL: "https://discord-clone-59406.firebaseio.com",
    projectId: "discord-clone-59406",
    storageBucket: "discord-clone-59406.appspot.com",
    messagingSenderId: "479780595640",
    appId: "1:479780595640:web:28be3f17169b8a0d06d14d",
    measurementId: "G-BCS50GZZX1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

