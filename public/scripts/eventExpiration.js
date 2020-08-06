// This function will create and array of events from the databse, and then sort them

// Create and empty Array to push dates to
let eventArray = [];
let eventDate;

myDb.ref("/Events").once("value", (res) => {

    const object = res.val();

    // For Loop converts each date into miliseconds, and then adds it to the eventArray
    for (const objectId in object) {

        var eventDateString = (object[objectId]["eventDate"]);

   
        let eventDate = Date.parse(eventDateString);
        // console.log(eventDate)

        eventArray.push(eventDate);
        // If the current date is one day past the date of any of the events we delete the event.
        if (eventDate < (Date.now() + 86400000)) {
            myDb.ref("Events/" + objectId).remove().then(function () {
                // console.log("Document successfully deleted!");
            }).catch(function (error) {
                // console.error("Error removing document: ", error);
            });
        } else {
            // console.log("Nothing to delete")
        }
    }
    
    //Sorts the array so that closest event is first to furthest away date 
    let sortedArray = eventArray.sort((a, b) => a - b)
    
    
    //Converts Back to Date Format after sorting the array
    sortedArray.forEach((eventDate) => {
        eventDateConverted = new Date(eventDate).toLocaleDateString();

        // console.log(eventDateConverted);
    })

});

