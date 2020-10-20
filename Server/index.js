// load Db 
const dbConnectionTest = require('../DB/dbconnect')

 // if in Development load variables from .env
process.env.NODE_ENV !== "production" && require("dotenv").config();
////////////////////////////////////////

//Create Express App
var expressLayouts = require('express-ejs-layouts');
const express = require("express");
const app = express();
////////////////////////////////////////

//Load Helper middlewares
const bodyParser = require("body-parser"); //Parse Json body
const cors = require("cors"); // Allow Cross Orign Calls
const morgan = require("morgan"); // Log Api calls
////////////////////////////////////////
// load api routes 
const publicRoutes = require('./Routes/public')
/////////////////////////////////////////

// parse incoming Request Object if object, with nested objects, or generally any type.
app.use(bodyParser.json());
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use('/' , publicRoutes)
/////////////////////////////////////////

//DB connection
//dbConnectionTest() ;

// Serve app
app.listen(process.env.PORT, () =>
  console.log(`Server started on ${process.env.PORT}`)
);
