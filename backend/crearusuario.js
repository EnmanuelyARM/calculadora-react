var express = require('express');
const direc1 = express.Router();
const usuarios = require('./usuarioModel'); //ohhhhhhhh


async function crearUsuario(req, res) {
    console.log("usuario creado correctamente");
    console.log(req.body);
   const {id, name2, surName} = req.body;
    const usuario = usuarios({
        id, name2, surName
    }) // aqui se guardan los valores creados
    await usuario.save() 
    
    res.send({message: "usuario creado"});
    console.log('post /read');

}

direc1.post("/", crearUsuario)
// req -> request y res -> response se utilizan por convencion

module.exports = direc1