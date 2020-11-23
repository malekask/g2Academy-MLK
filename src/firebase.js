import * as firebase from 'firebase';



const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCIdxU90NyHdsk9F1qCt61R6WFykk0ja_Q",
    authDomain: "react-firebase-auth-196bd.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-196bd.firebaseio.com",
    projectId: "react-firebase-auth-196bd",
    storageBucket: "react-firebase-auth-196bd.appspot.com",
    messagingSenderId: "494312023571"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;



// firebase react-redux react-router-dom recompose redux redux-thunk boostrap react-boostrap axios