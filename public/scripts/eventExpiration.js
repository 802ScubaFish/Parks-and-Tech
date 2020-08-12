// This function will create and array of events from the databse, and then sort them

// Create and empty Array to push dates to
let sortedArray = [];
let eventDate;
let displayEvent = document.getElementById("displayEvent");

function displayEvents(obj) {
  // console.log("inside function")
  // Sets up the main container for all the event list items
  let singleContainer = document.createElement(`div`);
  singleContainer.classList.add("singleEventContainer"); //this line adds a class to each of the events so we can target them with css styling

  // Each of the event list items variables
  let eventNames = `<div class="eventName">${obj["eventName"]}</div>`; //we added a class to each event name on this line so we can target them with css styling.
  let eventDesc = `<div>${obj["eventDesc"]}</div>`;
  let sortedEventDate = `<div>Date: ${obj["eventDate"]}</div>`;
  let eventStatus = `<div>Covid Status: ${obj["eventStatus"]}</div>`;
  let eventTime = `<div>Event Time: ${obj["eventTime"]}</div>`;
  let eventLoc = `<div>Event Location: ${obj["eventLoc"]}</div>`;

  // Append each event item to the singleContainer un-ordered list element
  singleContainer.innerHTML += eventNames;
  singleContainer.innerHTML += eventDesc;
  singleContainer.innerHTML += sortedEventDate;
  singleContainer.innerHTML += eventStatus;
  singleContainer.innerHTML += eventTime;
  singleContainer.innerHTML += eventLoc;

  // Append the single container un-ordered list with all the included list elements to the index.html doc
  displayEvent.append(singleContainer);
}

// For Loop converts each date into miliseconds, and then adds it to the eventArray
function sortDates(sortedObj) {

  let eventArray = [];

  for (const objectId in sortedObj) {
    // Pulls each date out of all of the event objects
    var eventDateString = sortedObj[objectId]["eventDate"];

    let eventDate = Date.parse(eventDateString);

    // If the current date is one day past the date of any of the events we delete the event.
    if (eventDate < (Date.now() + 86400000)) {
      myDb.ref("Events/" + objectId).remove().then(function () {
        // console.log("Document successfully deleted!");
      }).catch(function (error) {
        alert(error)
      })
    } else {
      // Add all the objects
      eventArray.push(sortedObj[objectId]);
      //Sorts the array so that closest event is first to furthest away date
      sortedArray = eventArray.sort(function (a, b) {
        let dateA = new Date(a.eventDate);
        let dateB = new Date(b.eventDate);

        return dateA - dateB;
      });
    }
  }


  return eventArray
}

myDb.ref("/Events").once("value", (res) => {
  const object = res.val();

  sortDates(object)

  sortedArray.forEach((eventObj) => {
    // console.log("This is running")
    displayEvents(eventObj)
  });
})