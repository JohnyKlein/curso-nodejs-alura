module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var mysql = require('mysql');
        var connecetion = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'ibt1705',
            database: 'livraria_nodejs'
        });

        connecetion.query('select * from livros', function(erro, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connecetion.end();

    });
}