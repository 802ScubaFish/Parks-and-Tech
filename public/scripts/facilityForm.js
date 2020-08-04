function submitFacility() {
    event.preventDefault();

    let facilityName = document.getElementById("facilityName").value;
    let facilityType = document.getElementById("facilityType").value;
    let activityType = document.getElementById("activityType").value;
    let location = document.getElementById("location").value;
    let announcements = document.getElementById("announcements").value;
    let contactInfo = document.getElementById("contactInfo").value;
    let website = document.getElementById("website").value;
    let uid = Date.now();

    formObj = {
        facilityName: facilityName,
        facilityType: facilityType,
        activityType: activityType,
        location: location,
        announcements: announcements,
        contactInfo: contactInfo,
        website: website,
        uid: uid,
    };



    //Opens the connection to the database and sets the object to the database
    myDb.ref(`/Facilities/facility_${uid}`).push(formObj)
    document.getElementById('facilitiesForm').reset();
}