const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarios = Schema ({
    id: {type: Number},
    name2: String,
    surName: String,

}, {timestamps: true});


// parametros cambiarlos a otros nombres segun lo que tenemos.

module.exports = mongoose.model('usuarios', usuarios); //rayos
