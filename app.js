const express = require('express'); 
const app = express();
const cors = require("cors");

const routes = require('./routes/routes');

app.get('/',function(req,res){
    res.send("Hello Dev App Running")
});

app.use(cors({ origin: "*" }));
app.use("/api/v1/user",routes);

module.exports = app;
