const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const routeProduct = require('./routes/productRoutes');
const routeCategory = require('./routes/categoryRoutes');

const app = express();
app.use(bodyParser.json());

// var localDB = 'mongodb://localhost:27017/dummys';
var localDB = 'mongodb://localhost:27017/pc-part-price';

app.use(cors());

mongoose.connect(localDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>
{
    console.log("Connected to database");
     app.use("/api/parts", routeProduct);
     app.use("/api/category", routeCategory);
})
.catch(() =>{
    console.log("Not Connected to database");
});

module.exports = app;