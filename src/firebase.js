import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDEQMBSbFib3hDj50zkqEXtEnNuA-4t3_k",
    authDomain: "slack-clone-b209c.firebaseapp.com",
    databaseURL: "https://slack-clone-b209c.firebaseio.com",
    projectId: "slack-clone-b209c",
    storageBucket: "slack-clone-b209c.appspot.com",
    messagingSenderId: "142132381364",
    appId: "1:142132381364:web:816dc942c85685027379e1",
    measurementId: "G-1MW3N0HE9Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider

export {auth, provider }
export default db

