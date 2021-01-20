var router =require("express").Router()
var db = require("../db/db.json")
var fs =require ("fs")


router.get("/api/notes", (req, res) => {
        console.log(db);
        res.json(db);
    });

// post
router.post("/api/notes", function(req,res){
    var newNotes =req.body;
    newNotes.id =newNotes.title.replace(/\s+/g,"").toLowerCase();
    
    db.push(newNotes);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    return res.json(newNotes);
});

// delete
router.delete("/api/notes/:id", function(req,res){
    var chosen =req.params.id;
    db =db.filter(({id})=> id !=chosen);

    fs.writeFileSync("./db/db.json", JSON.stringify(db));
    return res.json(true);


});


module.exports=router