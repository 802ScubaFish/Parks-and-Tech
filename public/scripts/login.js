

parksAndTechApp.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("userDiv").style.display = "block";
      document.getElementById("loginDiv").style.display = "none";

    } else {
      // No user is signed in.

      document.getElementById("userDiv").style.display = "none";
      document.getElementById("loginDiv").style.display = "block";
    }
  });

//Logs User In
function login() {
    
    var userEmail = document.getElementById("emailField").value;
    var userPassword = document.getElementById("passwordField").value;

    
    parksAndTechApp.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        
        window.alert("Error : " + errorMessage);
        
      });

}

function logout() {
    parksAndTechApp.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });
}