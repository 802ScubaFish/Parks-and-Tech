// Utilizes firebase
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//Initializes the database
const parksAndTechApp = firebase.initializeApp(firebaseConfig);
const myDb = parksAndTechApp.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();

//Sign in with user and password
// parksAndTechApp.auth()
// .signInWithEmailAndPassword(user, password)
// .then((res) => {