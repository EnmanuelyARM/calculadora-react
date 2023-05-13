var express = require('express');
const direc1 = express.Router();


function divi(req, res) {
    console.log("se dividieron");
    res.send({message: "dividiendo"});
    console.log('post /read');
}

direc1.get("/", divi)
// req -> request y res -> response se utilizan por convencion

module.exports = direc1