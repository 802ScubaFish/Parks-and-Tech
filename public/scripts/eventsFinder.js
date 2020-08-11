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
    const object = res.val();
    console.log(sporting.checked)
    if(sporting.checked){
      for (const objectId in object) {
        var dbObj = (object[objectId]["sporting"]);
        if (dbObj==="sporting"){
          displayEvents();
        }
        
        
      }
    }
    // console.log(biking.checked)
    // console.log(running.checked)  
    // console.log(swimming.checked)
    // console.log(fairFestival.checked)
    // console.log(holiday.checked)
    // console.log(youth.checked)
    // console.log(adult.checked)
    // console.log(senior.checked)
    // console.log(outdoors.checked)
    // console.log(indoors.checked)
    // console.log(natureBased.checked)
    // console.log(education.checked)
  
    for (const objectId in object) {
      var dbObj = object[objectId];
      console.log(dbObj)

      
    }
  });
}
