//import the express library
const express = require("express");

//import built-in path module
//path helps us safely create file paths
const path = require("path");

//create an express application
const app = express();

//define the port number
const PORT = 3002;

//serve static files from public folder
app.use(express.static(path.join(__dirname,"public")));


//route for the home page
app.get("/", (request,response) => {
 response.sendFile(path.join(__dirname,"public","index.html"));

});

//route for the contact page
app.get("/contact", (request,response) => {
   response.sendFile(path.join(__dirname,"public","contact.html"));
});

//Start the server
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});



