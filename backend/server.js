var cors = require('cors');
var express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8080;
const rutaUsuario = require("./crearusuario"); //crear .js crearusuario
const rutaSuma = require("./suma.js");
const rutaSubstract = require("./substract.js");
const rutaMult = require("./multiply.js");
const rutaDiv = require("./divide.js");
app.listen(port, () => {
    console.log(`server running on port ${port}`)

});
const mongoDB = "mongodb://127.0.0.1:27017/primerabasedatos";

// Wait for database to connect, logging an error if there is a problem
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}
//para conectar a la base de datos

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use("/crearusuario", rutaUsuario)  // ruta de guardar usuario, crear los demas
app.use(cors());
app.use("/suma", rutaSuma);
app.use("/resta", rutaSubstract);
app.use("/Multiplica", rutaMult);
app.use("/divide", rutaDiv);
// tengo pregunta




module.exports = app;