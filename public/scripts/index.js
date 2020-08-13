"use strict";

let map;
var activeInfoWindow;
let markersArray=[];

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
   
    for (const objectId in object) {
      var dbObj = object[objectId]
      var myLatLng = {
        lat: parseFloat(dbObj["lat"]),
        lng: parseFloat(dbObj["long"])
      };

      //only creates pins for facilities with lat and long entered
      if (myLatLng.lat != "" || myLatLng.long != "") {
        createPin(dbObj, myLatLng, object[objectId]["uid"])
      }
    }

  });
}


// creates infoWindow content for marker and places marker on map
function createPin(place, coords, uid) {

  //allows name of facility to act as link
  let pinContent =
    `<div class= "pin-info"><a href = '${place["website"]}'>${place["facilityName"]}</a>`

  //uses google's established constructor for infoWindown
  var infoWindow = new google.maps.InfoWindow({
    content: pinContent
  })
  //Places marker on map
  var marker = new google.maps.Marker({
    position: coords,
    uid: uid
  });

   markersArray.push(marker)
   

  
  //Allows links to pop up when hovered over and disappear when user moves mouse to another pin
  marker.addListener("click", function () {
    
    
    if (activeInfoWindow) {
      activeInfoWindow.close()
    }
    infoWindow.open(map, marker)
    activeInfoWindow = infoWindow

    
  })

  marker.setMap(map);
  
}

// Opens the Events Modal
function eventsFilter() {

  var eventsModal = document.getElementById("eventsModal");

  if (!eventsModal.style.display) {
    eventsModal.style.display = "block";
  } else if (eventsModal.style.display === 'none') {
    eventsModal.style.display = "block";
  } else {
    eventsModal.style.display = "none";
  }

}

// When the user clicks on <span> (x), close events the modal
function closeEventsModal() {
  eventsModal.style.display = "none";
}


// Opens the Facilities Modal
function facilitiesFilter() {

  var facilityModal = document.getElementById("facilitiesModal");

  if (!facilityModal.style.display) {
    facilityModal.style.display = "block";
  } else if (facilityModal.style.display === 'none') {
    facilityModal.style.display = "block";
  } else {
    facilityModal.style.display = "none";
  }

}

// When the user clicks on <span> (x), close the facilities modal
function closeFacilitiesModal() {
  facilitiesModal.style.display = "none";
}

function resetFilters() {

  setMapOnAll(map, markersArray)

  fullEventArray.forEach((eventObj) => {

    displayEvents(eventObj);

  });

}

//Get the button:
toTop = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the to Top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

// When the user clicks on the toTop button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
