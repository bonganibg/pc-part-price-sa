const mongoose = require('mongoose');

const params = {type: String, required: true}; // make the parameters a variable to the code cleaner
const categorySchema = new mongoose.Schema({
    Name: params,
    Products: []
});

module.exports = mongoose.model('Category',categorySchema);