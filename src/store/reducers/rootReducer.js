import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import studentReducer from "./StudentReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";


const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  student: studentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
