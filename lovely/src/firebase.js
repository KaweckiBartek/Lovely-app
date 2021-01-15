import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAg5C9I2uDunBValJIfozKq35dmMDXZFDo",
    authDomain: "lovely-58a9b.firebaseapp.com",
    projectId: "lovely-58a9b",
    storageBucket: "lovely-58a9b.appspot.com",
    messagingSenderId: "708911111402",
    appId: "1:708911111402:web:fe9a0e128dd5bc9f420b93",
    measurementId: "G-XR5XCWDWRH"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;