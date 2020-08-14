// This function will create and array of events from the databse, and then sort them

// Create and empty Array to push dates to
let sortedArray = [];
let fullEventArray = []
let eventDate;
let displayEvent = document.getElementById("displayEvent");

let iconList = {
  biking: "pedal_bike",
  education: "local_library",
  fairFestival: "local_play",
  holiday: "cake",
  indoors: "home_work",
  natureBased: "eco",
  outdoors: "terrain",
  running: "directions_run",
  sporting: "sports_soccer",
  swimming: "pool"
}

function displayEvents(obj) {

  // Sets up the main container for all the event list items
  let singleContainer = document.createElement(`div`);
  singleContainer.classList.add("singleEventContainer"); //this line adds a class to each of the events so we can target them with css styling

  let iconString = ""
  for (let icon in iconList) {
    if (obj[icon].length !== 0) {
      iconString += `<i class="material-icons">${iconList[icon]}</i>`
    }
  }

  // Each of the event list items variables
  let eventNames = `<div id="eventsName">${obj["eventName"]}&nbsp;${iconString}</div>`; //we added a class to each event name on this line so we can target them with css styling.
  let eventDesc = `<div class='eventClass' id='eventDesc'>${obj["eventDesc"]}</div>`;
  let sortedEventDate = `<div class='eventClass'>Date: ${convertDate(Date(Date.parse(obj['eventDate'])))}</div>`;
  let eventStatus = `<div class='eventClass'>Covid Status: ${obj["eventStatus"]}</div>`;
  let eventTime = `<div class='eventClass'>Event Time: ${convertTime(obj["eventTime"])} </div>`;
  let eventLoc = `<div class='eventClass'>Event Location: ${obj["eventLoc"]}</div>`;

  // console.log(Date(Date.parse(obj['eventDate'])))

  // Append each event item to the singleContainer un-ordered list element
  singleContainer.innerHTML += eventNames;
  singleContainer.innerHTML += eventDesc;
  singleContainer.innerHTML += sortedEventDate;
  singleContainer.innerHTML += eventStatus;
  singleContainer.innerHTML += eventTime;
  singleContainer.innerHTML += eventLoc;

  // Append the single container un-ordered list with all the included list elements to the index.html doc
  // only append if we are on the home page 'index.html'
  if (window.location.pathname.split('/')[1] === "index.html" || window.location.pathname.split('/')[1] === "") {
    displayEvent.append(singleContainer);
  }
  convertTime(obj['eventTime'])
}

// Function to format date to day/month/year 
function convertDate(dateString) {
  // return date string split
  let stringDate = dateString.split(' ');
  // return the month date and year from the string formatted
  let spiltDateString = stringDate[1] + ' ' + stringDate[2] + ' ' + stringDate[3] + ' '
  // return the formated dates to be displayed to the page
  return spiltDateString
}

// Function to format time and logic to add AM/PM
function convertTime(string) {
  // split all event times on the ':' and then grab the first half
  let stringTime = string.split(':')[0];
  let stringTimeMinutes = string.split(":")[1]
  let totalTime;

  // Convert string to number
  parsedTime = parseInt(stringTime)

  // If the number is greater than 12 we add PM and convert out of military time
  if (parsedTime > 12) {
    parsedTime = parsedTime - 12
    totalTime = parsedTime + ":" + stringTimeMinutes +
      "PM"
  }
  // If the number is less than 12 we add AM
  else if (parsedTime < 12) {
    totalTime = parsedTime + ":" + stringTimeMinutes +
      "AM"
  }
  // Return the new formated times to be displayed in the Events section
  return totalTime

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

  // Saves, sorts and builds our fullEventArray that we keep constant to use in the events filter
  let sortDatesVar = sortDates(object)

  fullEventArray = sortedArray; // <- side effect of database call, check logic here *

  sortDatesVar.map((eventObj) => {
    return displayEvents(eventObj)
  });

})
