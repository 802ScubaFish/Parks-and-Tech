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

        let singleContainer = document.createElement(`ul`)
        singleContainer.classList.add("singleEventContainer")

        let eventNames = `<div class="eventName">Name: ${object[objectId]["eventName"]}</div>`
        let eventDesc = `<div>Desc: ${object[objectId]['eventDesc']}</div>`
        let eventDate = `<div>Date: ${object[objectId]['eventDate']}</div>`
        let eventStatus = `<div>Status: ${object[objectId]['eventStatus']}</div>`
        let eventTime = `<div>Time: ${object[objectId]['eventTime']}</div>`
        let eventLoc = `<div>Location: ${object[objectId]['eventLoc']}</div>`

        singleContainer.innerHTML += eventNames
        singleContainer.innerHTML += eventDesc
        singleContainer.innerHTML += eventDate
        singleContainer.innerHTML += eventStatus
        singleContainer.innerHTML += eventTime
        singleContainer.innerHTML += eventLoc

        eventDisplay.append(singleContainer);
    }
});