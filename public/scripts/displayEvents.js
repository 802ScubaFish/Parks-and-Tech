// This document is responsible for displaying a list of current events,
// this function refrences the firebase database and pulls out each individual
// event, as well as the individual event data.

function showEventsList() {

    eventData.once("value")
        .then(function (events) {
            events.forEach(function (event) {

                var name_val = event.val().Name;

                document.getElementById("displayEvent").innerHTML = name_val;
            });
        });
}


//--------------------------------------------------Seperate Functionality Below--------------------------------------//


// Brings in the displayEvent element from index.html
eventDisplay = document.getElementById('displayEvent')
