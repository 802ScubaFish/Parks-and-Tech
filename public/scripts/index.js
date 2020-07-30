"use strict";

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 44.5588,
            lng: -72.5778
        },
        zoom: 9
    });
    
}