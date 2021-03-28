import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyCDWgrxZPfrObK89Wc_JyYTbjOWiWsce1c",
    authDomain: "slack-clone-a2adc.firebaseapp.com",
    projectId: "slack-clone-a2adc",
    storageBucket: "slack-clone-a2adc.appspot.com",
    messagingSenderId: "690436752257",
    appId: "1:690436752257:web:cf4bfdb269abcc2cf11e80"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }