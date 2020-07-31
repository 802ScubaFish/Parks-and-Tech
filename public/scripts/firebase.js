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


// Sign user in +
// Display a list of all events in the 'events-list'. This is the basic layout to pull events
// from the data base, and then create a list item for each individual event. 
// Leaving here as a placeholder for when we have information in a database to pull from.

// const userDisplay = document.getElementById('eventsList')

// document.getElementById('signinForm').addEventListener('submit', (evt) => {
//     evt.preventDefault()
//     let user = document.getElementById('userEmail').value
//     let password = document.getElementById('userPassword').value
  
//     document.getElementById('userEmail').value = ''
//     document.getElementById('userPassword').value = ''
  
//     myApp.auth().signInWithEmailAndPassword(user, password).then((res) => {
//       welcomeMessage.textContent = "Welcome, " + (res.user.displayName || res.user.email) + '!'
  
//       myDb.ref('/users/' + res.user.uid).on('value', (evt) => {
//         let userObj = evt.val()
//         console.log(userObj)
  
//         if (userObj.role === 'admin') {
//           console.log('is admin')
//           myDb.ref('/users').once('value', (evt) => {
//             let allUsersObj = evt.val()
  
//             for (let id in allUsersObj) {
//               let userItem = `<li><h5>${(allUsersObj[id].nickName || 'anonymous') + ':'}</h5><form id=${id}><input type='text' value=${allUsersObj[id].role} id="${'input-' + id}" /><input type='submit' /></form></li>`
//               userDisplay.innerHTML += userItem
//             }
//             for (let id in allUsersObj) {
//               console.log(document.getElementById('input-' + id))
//               document.getElementById(id).addEventListener('submit', (evt) => {
//                 evt.preventDefault()
  
//                 let newRole = document.getElementById('input-' + id).value
//                 myDb.ref('/users/' + id).update({
//                   role: newRole
//                 })
//               })
//             }
//           })
//         }
//       })
//     }).catch(error => {
//       alert(error.message)
//     })
//   })
