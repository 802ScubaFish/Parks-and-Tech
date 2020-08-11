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
let sortedEventArray = [];


//Takes an event and adds it to the page
function eventSearch() {
  myDb.ref("/Events").once("value", (res) => {
    displayEvent.innerHTML = "";
    const object = res.val();

    //If sporting is checked, it returns sporting events
    if (sporting.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["sporting"];
        if (dbObj === "sporting") {
          sortedEventArray.push(dbObj);

          // displayEvents(obj);
          // eventsModal.style.display = "none";
        }
      }
    }
    // If biking is checked, it returns biking events
    if (biking.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["biking"];
        if (dbObj === "biking") {
          sortedEventArray.push(dbObj);
          console.log(sortedEventArray);
        }
      }
    }
    //If running is checked, it returns running events
    if (running.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["running"];
        if (dbObj === "running") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If swimming is checked, it returns sporting events
    if (swimming.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["swimming"];
        if (dbObj === "swimming") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If fairFestival is checked, it returns fair/festival events
    if (fairFestival.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["fairFestival"];
        if (dbObj === "fair / festival") {
          sortedEventArray.push(dbObj);
        }
      }
    }

    //If holiday is checked, return holiday events
    if (holiday.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["holiday"];
        if (dbObj === "holiday") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If youth is checked, it returns youth events
    if (youth.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["youth"];
        if (dbObj === "youth") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If adult is checked, return adult events
    if (adult.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["adult"];
        if (dbObj === "adult") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If senior is checked, it returns senior events
    if (senior.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["senior"];
        if (dbObj === "senior") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If outdoors is checked, return outdoor events
    if (outdoors.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["outdoors"];
        if (dbObj === "outdoors") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If indoors is checked, it returns indoors events
    if (indoors.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["indoors"];
        if (dbObj === "indoors") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If natureBased is checked, return nature based events
    if (natureBased.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["natureBased"];
        if (dbObj === "nature based") {
          sortedEventArray.push(dbObj);
        }
      }
    }
    //If education is checked, it returns education events
    if (education.checked) {
      for (const objectId in object) {
        var obj = object;
        var dbObj = object[objectId]["education"];
        if (dbObj === "education") {
          sortedEventArray.push(dbObj);
        }
      }
    }

    // Logic to sort sortedEventArray Here
    
  });
}
