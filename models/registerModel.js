const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    surname:{
        type:String,
        trim:true
    },
    givenname: {
        type:String,
        trim:true
    },
    title:{
        type:String,
        trim:true
    },
    photo:{
        type:String,
        trim:true
    },
    gender:{
        type:String,
        trim:true
    },
    dob:{
        type:String,
        trim:true
    },
    country:{
        type:String,
        trim:true
    },
    residence:{
        type:String,
        trim:true
    },
    nationality:{
        type:String,
        trim:true
    }

})

module.exports = mongoose.model("Register", registerSchema)