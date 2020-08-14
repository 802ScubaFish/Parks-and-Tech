//On event submission, takes all the data and creates an object

function submitEvent() {
  event.preventDefault();

  let eventName = document.getElementById("eventName").value;
  let eventDate = document.getElementById("eventDate").value;
  let eventTime = document.getElementById("eventTime").value;
  let eventDesc = document.getElementById("eventDesc").value;
  let eventLoc = document.getElementById("eventLoc").value;
  let eventStatus = document.getElementById("eventStatus").value;

  let uid = Date.now();

  //Event Activities Checkboxes
  let sporting = document.getElementById("sporting");


  if (sporting.checked) {
    sporting = "sporting";
  } else {
    sporting = "";
  }

  let biking = document.getElementById("biking");

  if (biking.checked) {
    biking = "biking";
  } else {
    biking = "";
  }

  let running = document.getElementById("running");

  if (running.checked) {
    running = "running";
  } else {
    running = "";
  }

  let swimming = document.getElementById("swimming");

  if (swimming.checked) {
    swimming = "swimming";
  } else {
    swimming = "";
  }

  let fairFestival = document.getElementById("fairFestival");

  if (fairFestival.checked) {
    fairFestival = "fair / festival";
  } else {
    fairFestival = "";
  }

  let holiday = document.getElementById("holiday");

  if (holiday.checked) {
    holiday = "holiday";
  } else {
    holiday = "";
  }

  let youth = document.getElementById("youth");

  if (youth.checked) {
    youth = "youth";
  } else {
    youth = "";
  }

  let adult = document.getElementById("adult");

  if (adult.checked) {
    adult = "adult";
  } else {
    adult = "";
  }

  let senior = document.getElementById("senior");

  if (senior.checked) {
    senior = "senior";
  } else {
    senior = "";
  }

  let outdoors = document.getElementById("outdoors");

  if (outdoors.checked) {
    outdoors = "outdoors";
  } else {
    outdoors = "";
  }

  let indoors = document.getElementById("indoors");

  if (indoors.checked) {
    indoors = "holiday";
  } else {
    indoors
    indoors = "";
  }

  let natureBased = document.getElementById("natureBased");

  if (natureBased.checked) {
    natureBased = "nature based";
  } else {
    natureBased = "";
  }

  let education = document.getElementById("education");

  if (education.checked) {
    education = "education";
  } else {
    education = "";
  }

  formObj = {
    eventName: eventName,
    eventDate: eventDate,
    eventTime: eventTime,
    eventDesc: eventDesc,
    eventLoc: eventLoc,
    eventStatus: eventStatus,
    uid: uid,
    sporting: sporting,
    biking: biking,
    running: running,
    swimming: swimming,
    fairFestival: fairFestival,
    holiday: holiday,
    youth: youth,
    adult: adult,
    senior: senior,
    outdoors: outdoors,
    indoors: indoors,
    natureBased: natureBased,
    education: education
  };


  //Opens the connection to the database and sets the object to the database
  myDb.ref(`/Events/event_${uid}`).set(formObj)
  document.getElementById('eventForm').reset();

  alert('Thank you for Submitting your Event!')
}