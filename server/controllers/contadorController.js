var Contador = require('../db/models/contador.js');

/**
 * Get the contador value and update
 */
exports.contador_incrementa = function(req, res) {
    res.send('aloha!');
    
    Contador.findOne( { name:'teste'}, function(err, data) {
        if ( err ) {
            console.log(err);
            return;
        }
        
        var newRow = { value: parseInt(data.value) + 1 };

        Contador.updateOne( data, newRow, function(err, res) {
            if ( err ) {
                console.log('Ocorreu um erro ao fazer o update');
            }
    
            console.log('Update feito com sucesso!');
        })
    });
};

/**
 * Get the contador value from database and response with json 
 */
exports.contador_get_value = function(req, res) {

    Contador.findOne( { name : 'teste' }, function(err, data) {
        if ( err ) {
            console.log(err);
            return;
        }

        res.json(data.value);
    })

}

