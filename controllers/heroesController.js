const express = require("express");

const router = express.Router();

const hero = require("./../models/hero.js");

router.get("/", (req, res) => {
    hero.findAll((result) => {
        //res.json(result);
        res.render("home", {heroes: result});
    });
});

router.post("/api/add", (req, res) => {
    // TODO: Fixed bug where if user gives 
    // us the value of sidekick : "true"
    // to convert to a boolean value
    hero.insertOne(req.body, (result) => {
        res.json(result);
    });
});

router.put("/api/update/:id", (req, res) => {
     // TODO: Fixed bug where if user gives 
    // us the value of sidekick : "true"
    // to convert to a boolean value
    hero.updateById({sidekick: true}, req.params.id, (result) => {
        res.json(result);
    });
});

module.exports = router;