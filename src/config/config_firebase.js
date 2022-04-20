const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyDE3IkmgIdxh_NDWuFf78jR5GRv2eelad4",
    authDomain: "hba2022-e5821.firebaseapp.com",
    databaseURL: "https://hba2022-e5821-default-rtdb.firebaseio.com",
    projectId: "hba2022-e5821",
    storageBucket: "hba2022-e5821.appspot.com",
    messagingSenderId: "239569286794",
    appId: "1:239569286794:web:0966c7e3330cdcd5c01f73",
    measurementId: "G-J6ZLJ2MNQ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = firebase.firestore();