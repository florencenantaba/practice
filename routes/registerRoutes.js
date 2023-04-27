const express = require('express');
const router = express.Router();

const Register = require('../models/registerModel')
const multer = require("multer")

// router.get("/register", (req,res)=>{
//     res.render("register2")
// });
 
// multer
let storage = multer.diskStorage({
    destination:(req,file,cb)=>{cb(null,"public/images")}, 
    filename:(req,file,cb)=>{cb(null,file.originalname)}})

let imageupload = multer({storage:storage})  // creating an instance in multer

// post into a database
router.post("/register",imageupload.single("photo"), async(req,res) => {
    try{
        const register = new Register(req.body)
        register.photo= req.file.originalname 
        await register.save()
        res.redirect("/register") // we redirect to a path
        console.log(req.body)
        if(register){
            alert("Registered Successfully")
        }
    }

    catch(err){
        console.log(err)
    }
})

//redirecting from the db
// we redirect to a path and render to a file
router.get("/register", async(req,res)=>{
    try{
        let items = await Register.find();
        
        res.render("register2",{data:items})
    }
    catch(err){
        console.log(err)
        
    }
});










module.exports = router
