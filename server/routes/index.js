var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
    res.send('Hello about!');
});

router.get('/info', function(req, res) {
    res.send('Hello info!');
})

module.exports = router;