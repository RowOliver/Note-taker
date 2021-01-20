var express = require("express");

// EXPRESS RENAME TO APP
var app = express();

// SETS PORT
var PORT = process.env.PORT || 8080;

// DATA PARSING -> client will be stored in req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// 
app.use(express.static("public"));

var apiRoutes = require("./routes/apiRoutes");
var htmlRoutes =require("./routes/htmlRoutes");

app.use(apiRoutes);
app.use(htmlRoutes);

// Opening port
app.listen(PORT,function(){
    console.log("app is listening on port "+ PORT);
});




