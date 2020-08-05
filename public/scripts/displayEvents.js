// This document is responsible for displaying a list of current events,
// This function refrences the firebase database and pulls out each individual
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

eventDisplay = document.getElementById('displayEvent')

myDb.ref("/Events").once("value", (res) => {
    const object = res.val();
    // console.log(res.val())

    for (const objectId in object) {

        let eventNames = `Name: ${object[objectId]["eventName"]}`
        let eventDesc = `Desc: ${object[objectId]['eventDesc']}`
        let eventDate = `Date: ${object[objectId]['eventDate']}`
        let eventStatus = `Status: ${object[objectId]['eventStatus']}`
        let eventTime = `Time: ${object[objectId]['eventTime']}`
        let eventLoc = `Location: ${object[objectId]['eventLoc']}`

        eventDisplay.innerHTML += eventNames
        eventDisplay.innerHTML += eventDesc
        eventDisplay.innerHTML += eventDate
        eventDisplay.innerHTML += eventStatus
        eventDisplay.innerHTML += eventTime
        eventDisplay.innerHTML += eventLoc
    }
});