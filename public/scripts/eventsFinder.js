//DOM Queries
let sporting = document.getElementById("sporting");
let biking = document.getElementById("biking");
let running = document.getElementById("running");
let swimming = document.getElementById("swimming");
let fairFestival = document.getElementById("fairFestival");
let holiday = document.getElementById("holiday");
let youth = document.getElementById("youth");
let adult = document.getElementById("adult");
let senior = document.getElementById("senior");
let outdoors = document.getElementById("outdoors");
let indoors = document.getElementById("indoors");
let natureBased = document.getElementById("natureBased");
let education = document.getElementById("education");
let unsortedEventsArray = [];

//Takes an event and adds it to the page
function eventSearch() {
  myDb.ref("/Events").once("value", (res) => {
    displayEvent.innerHTML = "";
    unsortedEventsArray = [];
    const object = res.val();

    //If sporting is checked, it returns sporting events
    if (sporting.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["sporting"];
        if (dbObj === "sporting") {
          unsortedEventsArray.push(object[objectId])
        }
      }
    }
    // If biking is checked, it returns biking events
    if (biking.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["biking"];
        if (dbObj === "biking") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If running is checked, it returns running events
    if (running.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["running"];
        if (dbObj === "running") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If swimming is checked, it returns sporting events
    if (swimming.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["swimming"];
        if (dbObj === "swimming") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If fairFestival is checked, it returns fair/festival events
    if (fairFestival.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["fairFestival"];
        if (dbObj === "fair / festival") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }

    //If holiday is checked, return holiday events
    if (holiday.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["holiday"];
        if (dbObj === "holiday") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If youth is checked, it returns youth events
    if (youth.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["youth"];
        if (dbObj === "youth") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If adult is checked, return adult events
    if (adult.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["adult"];
        if (dbObj === "adult") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If senior is checked, it returns senior events
    if (senior.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["senior"];
        if (dbObj === "senior") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If outdoors is checked, return outdoor events
    if (outdoors.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["outdoors"];
        if (dbObj === "outdoors") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If indoors is checked, it returns indoors events
    if (indoors.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["indoors"];
        if (dbObj === "indoors") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If natureBased is checked, return nature based events
    if (natureBased.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["natureBased"];
        if (dbObj === "nature based") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }
    //If education is checked, it returns education events
    if (education.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["education"];
        if (dbObj === "education") {
          unsortedEventsArray.push(object[objectId]);
        }
      }
    }

    // If no filter checkboxes are selected then we return our unchanged global event variable to re-display the full events list
    if(unsortedEventsArray.length === 0){

     fullEventArray.forEach((eventObj) => {

        displayEvents(eventObj);

      });

    }

    // Function to remove any duplicate objects in the Events array
    function removeDuplicateData(myArr) {

      // Itterating over the array of objects. The first instance of each objects index is recorded.
      // If a duplicate object is found, the index is checked and if it does not match then the duplicate item is not
      // added to the array.
      let uniqueObj = myArr.filter((object, index) => {
        return myArr.indexOf(object) === index;
      });

      uniqueObj = sortDates(uniqueObj)
      
        // Display any non duplicated objects
        uniqueObj.forEach((obj) => {
          displayEvents(obj)
        })
      
      closeEventsModal()
    }
    removeDuplicateData(unsortedEventsArray)
  });

}