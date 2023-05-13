var express = require('express');
const direc1 = express.Router();


function subst(req, res) {
    console.log("se restaron");
    res.send({message: "restando"});
    console.log('post /read');
}

direc1.get("/", subst)
// req -> request y res -> response se utilizan por convencion

module.exports = direc1