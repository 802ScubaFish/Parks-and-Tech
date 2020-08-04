parksAndTechApp.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    document.getElementById("userDiv").style.display = "flex";
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


  parksAndTechApp.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...

    window.alert("Error : " + errorMessage);

  });

}

function logout() {
  parksAndTechApp.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    // An error happened.
  });
}

function displayEventForm() {

  var eventForm = document.getElementById("wholeEventForm");

  if (!eventForm.style.display) {
    eventForm.style.display = "block";
  } else if (eventForm.style.display === 'none') {
    eventForm.style.display = "block";
  } else {
    eventForm.style.display = "none";
  }

}

function displayFacilityForm() {

  var facilityForm = document.getElementById("wholeFacilityForm");

  if (!facilityForm.style.display) {
    facilityForm.style.display = "block";
  } else if (facilityForm.style.display === 'none') {
    facilityForm.style.display = "block";
  } else {
    facilityForm.style.display = "none";
  }

}