const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path');
const flash = require('express-flash');

app.use(bp.json());
app.use(express.static( __dirname + '/public/dist/public'));
app.use(flash());

require("./routes")(app)

app.listen(8000,function(){
    console.log("listening on port 8000");
})