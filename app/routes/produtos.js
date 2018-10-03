module.exports = function(app) {
    app.get('/produtos', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosBD = new app.infra.produtosBD(connection);

        produtosBD.lista(function(erros, resultados){
            response.render("produtos/lista", {lista:resultados})
        });

        connection.end();
    });
    
    app.get('/produtos/remove', function(req, response){
        var connection = app.infra.connectionFactory();
        var produtosBD = app.infra.produtosBD(connection);
        var produto = produtosBD.carrega(id,callback)
        if (produto != null) {
            produtosBD.remove(produto,callback);
        }

        connection.end();
    });
}