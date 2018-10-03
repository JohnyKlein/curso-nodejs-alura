module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(erros, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connection.end();
    });
    
    app.get('/produtos/remove', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosDAO = app.infra.produtosDAO(connection);
        var produto = produtosDAO.carrega(id,callback)
        if (produto != null) {
            produtosDAO.remove(produto,callback);
        }

        connection.end();
    });
}