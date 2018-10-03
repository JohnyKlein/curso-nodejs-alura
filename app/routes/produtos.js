module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connection.end();
    });
    
    app.get('/produtos/adicionar', function(req, response){
        response.render("produtos/adiciona");
    });
}