// This function will create and array of events from the databse, and then sort them

// Create and empty Array to push dates to
let eventArray = [];

myDb.ref("/Events").once("value", (res) => {
    
    const object = res.val();

    // For Loop converts each date into miliseconds, and then adds it to the eventArray
    for (const objectId in object) {

        var eventDateString = (object[objectId]["eventDate"]);
        
        // console.log(eventDateString);

        let eventDate = Date.parse(eventDateString);

        eventArray.push(eventDate);

    } 
    //Sorts the array so that closest event is first to furthest away date 
    let sortedArray= eventArray.sort((a,b)=>a-b)
        // console.log(sortedArray);

   
//Converts Back to Date Format after sorting the array
    sortedArray.forEach((eventDate) => {
       eventDateConverted = new Date(eventDate).toLocaleDateString();

       console.log(eventDateConverted);
    })
    
});