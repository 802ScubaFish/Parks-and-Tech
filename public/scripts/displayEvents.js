// This document is responsible for displaying a list of current events,
// this function refrences the firebase database and pulls out each individual
// event, as well as the individual event data.

function showEventsList() {

    eventData.once("value")
        .then(function (events) {
            events.forEach(function (event) {

                console.log(event);

                var key = event.key;
                var eventData = event.val(); // eventData will be the actual contents of the event
                var name_val = event.val().Name;

                document.getElementById("displayEvent").innerHTML = name_val;
            });
        });
}


//--------------------------------------------------Seperate Functionality Below--------------------------------------//


// Brings in the displayEvent element from index.html
eventDisplay = document.getElementById('displayEvent')


// Refrences the Events section of the Database
// myDb.ref("/Events").once("value", (res) => {

//     // sets the response to an object variable
//     const object = res.val();

//     // Sets up the 'for in' loop. Any events in the database will get pulled out individually,
//     //   and then are each added to the 'singleContainer' element. It is important to use
//     //      class names and not id's because these will be applied to every event in
//     //          the loop (not just one).
//     for (const objectId in object) {

//         // sets up the main container for all the event list items
//         let singleContainer = document.createElement(`div`)
//         singleContainer.classList.add("singleEventContainer") //this line adds a class to each of the events so we can target them with css styling

//         // Each of the event list items variables
//         let eventNames = `<div class="eventName">${object[objectId]["eventName"]}</div>` //we added a class to each event name on this line so we can target them with css styling.
//         let eventDesc = `<div>${object[objectId]['eventDesc']}</div>`
//         let eventDate = `<div>Date: ${object[objectId]['eventDate']}</div>`
//         let eventStatus = `<div>Covid Status: ${object[objectId]['eventStatus']}</div>`
//         let eventTime = `<div>Event Time: ${object[objectId]['eventTime']}</div>`
//         let eventLoc = `<div>Event Location: ${object[objectId]['eventLoc']}</div>`

//         // Append each event item to the singleContainer un-ordered list element
//         singleContainer.innerHTML += eventNames
//         singleContainer.innerHTML += eventDesc
//         singleContainer.innerHTML += eventDate
//         singleContainer.innerHTML += eventStatus
//         singleContainer.innerHTML += eventTime
//         singleContainer.innerHTML += eventLoc

//         // Append the single container un-ordered list with all the included list elements to the index.html doc
//         eventDisplay.append(singleContainer);
//     }

// });