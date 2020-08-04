//On event submission, takes all the data and creates an object

function submitEvent() {
  event.preventDefault();

  let eventName = document.getElementById("eventName").value;
  let eventDate = document.getElementById("eventDate").value;
  let eventTime = document.getElementById("eventTime").value;
  let eventDesc = document.getElementById("eventDesc").value;
  let eventLoc = document.getElementById("eventLoc").value;
  let eventStatus = document.getElementById("eventStatus").value;
  let eventExp = document.getElementById("eventExp").value;
  let uid = Date.now();

  formObj = {
    eventName: eventName,
    eventDate: eventDate,
    eventTime: eventTime,
    eventDesc: eventDesc,
    eventLoc: eventLoc,
    eventStatus: eventStatus,
    eventExp: eventExp,
    uid: uid,
  };

 

  //Opens the connection to the database and sets the object to the database
  myDb.ref(`/Events/event_${uid}`).push(formObj)
}
