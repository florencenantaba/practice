const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const mongoose= require("mongoose");
const bodyParser= require("body-parser");

const config = require("./config/database");

// support parsing of application/json type post data
app.use(bodyParser.json());


//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// creating a connection between the controller and database
mongoose.connect(config.database,{
    //useNEW collects data then formats it
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db= mongoose.connection
// checking if db has connected
db.once("open", ()=>{
console.log("connected to db")
})
db.on("error",(err)=>{
console.error(err)
})


app.set("view engine","pug");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));

const registerRoutes = require("./routes/registerRoutes");




app.use("/",registerRoutes);






// this should always be the last line in your server file
app.listen(3000, () => console.log('listening on port 3000'));