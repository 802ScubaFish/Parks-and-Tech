"use strict";

let map;
var activeInfoWindow;
let markersArray = [];
var eventsModal = document.getElementById("eventsModal");
var facilityModal = document.getElementById("facilitiesModal");

let facilityIconList = {
  beach: "beach_access",
  park: "eco",
  playground: "format_strikethrough",
  dogPark: "pets",
  bikingFacilities: "directions_bike",
  hiking: "directions_walk",
  basketball: "sports_basketball",
  fields: "tablet",
}
// Creates the map and centers on Vermont
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 44.1,
      lng: -72.6,
    },
    zoom: 7.1,
  });

  var vtBoundsCoords = coordinates

  const greenVT = new google.maps.Polygon({
    paths: vtBoundsCoords,
    strokeColor: "black",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "green",
    fillOpacity: 0.35
  })

  greenVT.setMap(map)
  // map.data.add({geometry: new google.maps.Data.Polygon([vtBoundsCoords])})


  //Grabs the lat and lng from the database. Adds all facilities to map. 
  myDb.ref("/Facilities").once("value", (res) => {
    const object = res.val();

    for (const objectId in object) {
      var dbObj = object[objectId]
      var myLatLng = {
        lat: parseFloat(dbObj["lat"]),
        lng: parseFloat(dbObj["long"])
        
      };
      
      let facilityIconString = ""
      for (let icon in facilityIconList) {
        
        if(dbObj[icon]){
        if (dbObj[icon].length !== 0) {
          facilityIconString += `<i class="material-icons">${facilityIconList[icon]}</i>`
        }
      }
    }
      //only creates pins for facilities with lat and long entered
      if (myLatLng.lat != "" || myLatLng.long != "") {
        createPin(dbObj, myLatLng, object[objectId]["uid"], facilityIconString)
      }
    }
  });
}



// creates infoWindow content for marker and places marker on map
function createPin(place, coords, uid, facilityIconString) {



  //allows name of facility to act as link
  let pinContent =
    `<div class= "pin-info"><a href = '${place["website"]}'>${place["facilityName"]}</a>${facilityIconString}`

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

// Opens the Icon Key Modal
function iconsKey() {

  var iconsModal = document.getElementById("iconsModal")
  topFunction();

  if (!iconsModal.style.display) {
    iconsModal.style.display = "block";
  } else if (iconsModal.style.display === 'none') {
    iconsModal.style.display = "block";
  } else {
    iconsModal.style.display = "none";
  }
}

// Closes Icons Key Modal
function closeIconsModal() {
  iconsModal.style.display = "none";
}

// Opens the Events Modal
function eventsFilter() {

  facilityModal.style.display = "none";
  topFunction();

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

  eventsModal.style.display = "none";
  topFunction()
  
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
let toTop = document.getElementById("toTop");

// When the user scrolls down 20px from the top of the document, show the to Top button
window.onscroll = function () { scrollFunction() };

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
