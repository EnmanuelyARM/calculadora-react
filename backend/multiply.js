var express = require('express');
const direc1 = express.Router();


function multip(req, res) {
    console.log("se multiplicaron");
    res.send({message: "multiplicando"});
    console.log('post /read');
}

direc1.get("/", multip)
// req -> request y res -> response se utilizan por convencion

module.exports = direc1