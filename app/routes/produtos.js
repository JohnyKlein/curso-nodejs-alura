module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosBD = app.infra.produtosBD;

        produtosBD.lista(connection, function(erros, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connection.end();
    });
}