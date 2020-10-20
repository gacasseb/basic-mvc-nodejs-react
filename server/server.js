const express = require('express');
// Dependencia necessária para conexão do servidor com o navegador
const cors = require('cors');

// Conexão com o banco de dados
var mongoose = require('mongoose');

const uri = 'DATABASE_URL';
const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true
};

var db = mongoose.connect(uri, options, (err) => {

    // Retorna se o banco de dados não foi conectado
    if ( err ) {
        console.log('Banco de dados não foi conectado com sucesso');
        console.log(err);

        return false;
    }

    console.log('Banco de dados conectado com sucesso.');
})

const port = 1000;
const app = express();

var index = require('./routes/index.js');
var contador = require('./routes/api/contador.js');

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});

app.use(cors());

app.use('/', index);
app.use('/', contador);
