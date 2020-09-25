var mongoose = require('mongoose');

const uri = 'mongodb+srv://sysadm:admin@casseb.4tucv.gcp.mongodb.net/casseb?retryWrites=true&w=majority';
const options = {
    useNewUrlParser:true,
    useUnifiedTopology: true
}

exports.db = mongoose.connect(uri, options, (err) => {

    if (err) {
        console.log('Banco de dados não foi conectado com sucesso!');
    }

    console.log('Banco de dados conectado')

});