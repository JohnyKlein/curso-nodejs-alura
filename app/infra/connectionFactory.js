var mysql = require('mysql');

function createDBConnection() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ibt1705',
        database: 'livraria_nodejs'
    });

    return connection;
}

//Wraper, so carrega os dados qd o objeto eh invocado
module.exports = function() {
    return createDBConnection;
}