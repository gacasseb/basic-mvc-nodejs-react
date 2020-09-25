const express = require('express');
var router = express.Router();

var contador_controller = require('../../controllers/contadorController');

router.post('/soma', function(req, res) {
    
    // Direcionar para o controller
    contador_controller.contador_incrementa();
});

router.get('/soma', function(req, res) {
    
    // Direcionar para o controller
    contador_controller.contador_incrementa(req, res);
});

router.get('/getData', function(req, res) {
    
    // Direcionar para o controller
    contador_controller.contador_get_value(req, res);
});

module.exports = router;