var Model = require('../index.js');
var mongoose = require('mongoose');
var mongoose = require('mongoose');

var ContadorSchema = new mongoose.Schema({
    name: { type: String },
    value: { type: String }
})

var Contador = mongoose.model('contador', ContadorSchema);


exports = module.exports = Contador;