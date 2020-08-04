//Firebase setup 
const firebaseConfig = {
  apiKey: "AIzaSyAR7Mp0IGpvHdJsy1VTJZwn3SBO_4txueU",
  authDomain: "parksandtechvt.firebaseapp.com",
  databaseURL: "https://parksandtechvt.firebaseio.com",
  projectId: "parksandtechvt",
  storageBucket: "parksandtechvt.appspot.com",
  messagingSenderId: "75295634723",
  appId: "1:75295634723:web:c34c863df326f7478ec896",
  measurementId: "G-G29HTBFPZ9",
};

//Initializes the database
const parksAndTechApp = firebase.initializeApp(firebaseConfig);
const myDb = parksAndTechApp.database();
const googleProvider = new firebase.auth.GoogleAuthProvider();


