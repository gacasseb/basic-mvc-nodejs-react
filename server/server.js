const express = require('express');
const database = require('./db/index');
// Dependencia necessária para conexão do servidor com o navegador
const cors = require('cors');

const port = 1000;
const app = express();

var index = require('./routes/index.js');
var contador = require('./routes/api/contador.js');

app.listen(port, function() {
    console.log(`Server running on port ${port}`);
});

app.use(cors());

app.use('/', index);
app.use('/contador', contador);
