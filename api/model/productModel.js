const mongoose = require('mongoose');

const params = {type: String, required: true}; // make the parameters a variable to the code cleaner
const productSchema = new mongoose.Schema({
    Name: params,
    Price: {type: Number, required: true},
    Store: params,
    Manufacturer: params,
    Category: params,
    Image: params,
    additional: {}
});

module.exports = mongoose.model('Products', productSchema);