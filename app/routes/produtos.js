var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var connection = connectionFactory();

        connection.query('select * from livros', function(erros, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connection.end();
    });
}