"use strict";

let map;
var activeInfoWindow;
// Creates the map and centers on Vermont
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 44.1,
      lng: -72.7,
    },
    zoom: 7,
  });


  //Grabs the lat and lng from the database. Adds all facilities to map. 
  myDb.ref("/Facilities").once("value", (res) => {
    const object = res.val();
    // console.log(res.val())

    for (const objectId in object) {
      var dbObj = object[objectId]
      var myLatLng = { lat: parseFloat(dbObj["lat"]), lng: parseFloat(dbObj["long"]) };
      
      //only creates pins for facilities with lat and long entered
      if(myLatLng.lat != "" || myLatLng.long != ""){
        createPin(dbObj,myLatLng)
      }
    }

  });
}
// creates infoWindow content for marker and places marker on map
function createPin(place, coords) {

  //allows name of facility to act as link
  let pinContent =
        `<div class= "pin-info"><a href = '${place["website"]}'>${place["facilityName"]}</a>`
      
      //uses google's established constructor for infoWindown
      var infoWindow = new google.maps.InfoWindow({
        content: pinContent
      })
      //places marker on map
      var marker = new google.maps.Marker({
        position: coords,

      });
      console.log(coords)

      //allows links to pop up when hovered over and disappear when user moves mouse to another pin
      marker.addListener("click", function () {
        if(activeInfoWindow) {
          activeInfoWindow.close()
        }
        infoWindow.open(map, marker)
        activeInfoWindow = infoWindow
      })

      marker.setMap(map);
     

}


// //Hamburger Animation
// const menuButton = document.querySelector(".menuButton");
// let menuIsOpen = false;
// menuButton.addEventListener("click", () => {
//   console.log("This is clicked");
//   if (!menuIsOpen) {
//     menuButton.classList.add("open");
//     menuIsOpen = true;
//   } else {
//     menuButton.classList.remove("open");
//     menuIsOpen = false;
//   }
// });
