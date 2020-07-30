require ('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const public = path.resolve('./public');

// Sets up Static File Sever below on one line
app.use(express.static('./public'))

// Sets up API end point that will allow access to the API Key
app.get('/apiKey', (req, res) => {
    res.send(process.env.MAP_API_KEY)
})

//Sets up Firebase API
app.get("/firebaseApiKey", (req, res)=>{
    var firebaseConfig = {
        apiKey: process.env.firebaseApiKey,
        authDomain: process.env.firebaseAuthDomain,
        databaseURL: process.env.firebaseDatabaseURL,
        projectId: "parksandtechvt",
        storageBucket: process.env.firebaseStorageBucket,
        messagingSenderId: process.env.firebaseMessagingSenderId,
        appId: process.env.firebaseAppId,
        measurementId: process.env.firebaseMeasurementId
      };

    res.send(firebaseConfig)
    
})

// 404 path uses '*' to select all other users inputed paths to direct to the 404 Page
app.get('*', (req, res) => {
    res.sendFile(public + '/404.html')
})

// Telling the express server to listen and to console log inside 'Node' what server it is listening on when server is started
app.listen(port, () => console.log(`Listening on port ${port}!`))
