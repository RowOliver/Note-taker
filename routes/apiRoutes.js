var router =require("express").Router()
var db = require("../db/db.json")
var fs =require ("fs")


router.get("/api/notes", function(req,res){
    console.log(db)
    res.json(db)
})

// post
router.post("/api/notes", function(req,res){
    res.json(db)
})

// delete
router.delete("/api/notes", function(req,res){
    res.json(db)
})

module.exports=router