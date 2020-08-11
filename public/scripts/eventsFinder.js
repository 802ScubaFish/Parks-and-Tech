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

//Takes an event and adds it to the page
function eventSearch() {
  myDb.ref("/Events").once("value", (res) => {
    displayEvent.innerHTML ="";
    const object = res.val();
    
    if(sporting.checked){
      for (const objectId in object) {
        var obj= object;
        var dbObj = (object[objectId]["sporting"]);
        if (dbObj==="sporting"){
          
          displayEvents(obj);
          eventsModal.style.display = "none";
          
        }
      }
    }
  });
}
