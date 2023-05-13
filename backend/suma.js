var express = require('express');
const direc1 = express.Router();


function sumar(req, res) {
    console.log("se sumaron");
    console.log(req.params.num1);
    console.log(req.params.num2);
    res.send({message: "sumando"});
    console.log('post /read');

}

direc1.get("/:num1/:num2", sumar)
// req -> request y res -> response se utilizan por convencion

module.exports = direc1