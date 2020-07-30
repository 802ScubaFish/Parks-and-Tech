const express = require ("express")
const path = require ("path")
const app = express()
const port = process.env.PORT || 5000

app.use(express.static(path.resolve("./public")))

app.get("*",(request,response) => {
    response.sendFile(path.resolve("./public/index.html"))
} )


app.listen(port, () => {
    console.log("listening on port" + port) 
})