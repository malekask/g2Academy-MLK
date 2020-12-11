import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  // apiKey: "AIzaSyCPEv4UDOH9o7P7wy9fWFs_aFnCdV-UR4E",
  // authDomain: "netninjamarioplan.firebaseapp.com",
  // databaseURL: "https://netninjamarioplan.firebaseio.com",
  // projectId: "netninjamarioplan",
  // storageBucket: "netninjamarioplan.appspot.com",
  // messagingSenderId: "962835604866"
  apiKey: "AIzaSyB_-pK6MR5QgYFFp_3rHOGyYaIJccVALMc",
  authDomain: "user-latihan-crud.firebaseapp.com",
  databaseURL: "https://user-latihan-crud.firebaseio.com",
  projectId: "user-latihan-crud",
  storageBucket: "user-latihan-crud.appspot.com",
  messagingSenderId: "453909564781"
   
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
