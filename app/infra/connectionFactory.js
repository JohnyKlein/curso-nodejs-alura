var mysql = require('mysql');

module.exports = function() {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'ibt1705',
        database: 'livraria_nodejs'
    });
    return connection;
}