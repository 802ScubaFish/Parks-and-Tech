"use strict";

let map;

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
        var myLatLng = {lat :parseFloat(object[objectId]["lat"]), lng: parseFloat(object[objectId]["long"])};
        
      
      var marker = new google.maps.Marker({
        position: myLatLng,
        
        
    });
    marker.setMap(map);
    }
  
  });
}

//Hamburger Animation
const menuButton = document.querySelector(".menuButton");
let menuIsOpen = false;
menuButton.addEventListener("click", () => {
  console.log("This is clicked");
  if (!menuIsOpen) {
    menuButton.classList.add("open");
    menuIsOpen = true;
  } else {
    menuButton.classList.remove("open");
    menuIsOpen = false;
  }
});
