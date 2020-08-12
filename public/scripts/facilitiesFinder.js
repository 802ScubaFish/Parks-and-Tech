//DOM Queries
let beach = document.getElementById("beach");
let park = document.getElementById("park");
let playground = document.getElementById("playground");
let dogPark = document.getElementById("dogPark");
let bikingFacility = document.getElementById("bikingFacilities");
let hiking = document.getElementById("hiking");
let basketballCourts = document.getElementById("basketballCourts");
let athleticFields = document.getElementById("athleticFields");
let unsortedFacilitiesArray = [];

//Takes a facility and adds it to the page sorted.
function facilitySearch() {
  myDb.ref("/Facilities").once("value", (res) => {
    const object = res.val();

    //If beach is checked, it returns beaches
    if (beach.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["beach"];
        if (dbObj === "beach") {
          unsortedFacilitiesArray.push(object[objectId]);
        }
      }
    }

    //If park is checked, it returns park
    if (park.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["park"];
        if (dbObj === "park") {
          unsortedFacilitiesArray.push(object[objectId]);
        }
      }
    }

    //If playground is checked, it returns playground
    if (playground.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["playground"];
        if (dbObj === "playground") {
          unsortedFacilitiesArray.push(object[objectId]);
        }
      }
    }

    //If dogPark is checked, it returns dogPark
    if (dogPark.checked) {
      for (const objectId in object) {
        var dbObj = object[objectId]["dogPark"];
        if (dbObj === "dogPark") {
          unsortedFacilitiesArray.push(object[objectId]);
        }
      }
    }

      //If bikingFacilities is checked, it returns bikingFacilities
      if (bikingFacilities.checked) {
        for (const objectId in object) {
          var dbObj = object[objectId]["bikingFacilities"];
          if (dbObj === "bikingFacilities") {
            unsortedFacilitiesArray.push(object[objectId]);
          }
        }
      }


      //If hiking is checked, it returns hiking
      if (hiking.checked) {
        for (const objectId in object) {
          var dbObj = object[objectId]["hiking"];
          if (dbObj === "hiking") {
            unsortedFacilitiesArray.push(object[objectId]);
          }
        }
      }

        //If basketballCourts is checked, it returns basketballCourts
        if (basketballCourt.checked) {
            for (const objectId in object) {
              var dbObj = object[objectId]["basketballCourts"];
              if (dbObj === "basketballCourts") {
                unsortedFacilitiesArray.push(object[objectId]);
              }
            }
          }

          //If athleticFields is checked, it returns athleticFields
        if (athleticFields.checked) {
            for (const objectId in object) {
              var dbObj = object[objectId]["athleticFields"];
              if (dbObj === "athleticFields") {
                unsortedFacilitiesArray.push(object[objectId]);
              }
            }
          }

  });
}

facilitySearch();
