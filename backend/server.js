var cors = require('cors');
var express = require('express');
const app = express();
const port = 8080;
const rutaSuma = require("./suma.js");
const rutaSubstract = require("./substract.js");
const rutaMult = require("./multiply.js");
const rutaDiv = require("./divide.js");
app.listen(port, () => {
    console.log(`server running on port ${port}`)

});

app.use(cors());
app.use("/suma", rutaSuma);
app.use("/resta", rutaSubstract);
app.use("/Multiplica", rutaMult);
app.use("/divide", rutaDiv);




module.exports = app;