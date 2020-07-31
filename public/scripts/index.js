"use strict";

let map;

// Creates the map and centers on Vermont
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: {
            lat: 44.5588,
            lng: -72.5778
        },
        zoom: 7
    });
    
}

//Hamburger Animation
const menuButton = document.querySelector(".menuButton");
let menuIsOpen =false;
menuButton.addEventListener("click", ()=>{
    if (!menuIsOpen){
        menuButton.classList.add("open");
        menuIsOpen=true;
    }else{
        menuButton.classList.remove("open");
        menuIsOpen= false;
    }
})