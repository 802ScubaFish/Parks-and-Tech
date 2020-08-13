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
let unSortedEventArray = [];

//Takes an event and adds it to the page
function eventSearch() {
  myDb.ref("/Events").once("value", (res) => {
    displayEvent.innerHTML = "";
    unSortedEventArray = [];
    const object = res.val();

    //If sporting is checked, it returns sporting events
    if (sporting.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["sporting"];
        if (dbObj === "sporting") {
          unSortedEventArray.push(object[objectId])
        }
      }
    }
    // If biking is checked, it returns biking events
    if (biking.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["biking"];
        if (dbObj === "biking") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If running is checked, it returns running events
    if (running.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["running"];
        if (dbObj === "running") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If swimming is checked, it returns sporting events
    if (swimming.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["swimming"];
        if (dbObj === "swimming") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If fairFestival is checked, it returns fair/festival events
    if (fairFestival.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["fairFestival"];
        if (dbObj === "fair / festival") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }

    //If holiday is checked, return holiday events
    if (holiday.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["holiday"];
        if (dbObj === "holiday") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If youth is checked, it returns youth events
    if (youth.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["youth"];
        if (dbObj === "youth") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If adult is checked, return adult events
    if (adult.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["adult"];
        if (dbObj === "adult") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If senior is checked, it returns senior events
    if (senior.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["senior"];
        if (dbObj === "senior") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If outdoors is checked, return outdoor events
    if (outdoors.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["outdoors"];
        if (dbObj === "outdoors") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If indoors is checked, it returns indoors events
    if (indoors.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["indoors"];
        if (dbObj === "indoors") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If natureBased is checked, return nature based events
    if (natureBased.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["natureBased"];
        if (dbObj === "nature based") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }
    //If education is checked, it returns education events
    if (education.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["education"];
        if (dbObj === "education") {
          unSortedEventArray.push(object[objectId]);
        }
      }
    }

    // Function to remove any duplicate objects in the Events array
    function removeDuplicateData(myArr) {

      // Itterating over the array of objects. The first instance of each objects index is recorded.
      // If a duplicate object is found, the index is checked and if it does not match then the duplicate item is not
      // added to the array.
      let uniqueObj = myArr.filter((object, index) => {
        return myArr.indexOf(object) === index;
      });

      console.log(uniqueObj)
      
      uniqueObj = sortDates(uniqueObj)
      
      // Display any non duplicated objects
      uniqueObj.forEach((obj) => {
        
        displayEvents(obj)
      })
      
      closeEventsModal()
    }

    removeDuplicateData(unSortedEventArray)
  });

}