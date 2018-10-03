module.exports = function(app) {
    var listaProdutos = function(req, response){
            var connection = app.infra.connectionFactory();
            var produtosDAO = new app.infra.ProdutosDAO(connection);

            produtosDAO.lista(function(erros, resultados){
                response.render("produtos/lista", {lista:resultados})
            });

        connection.end();
    };

    app.get('/produtos', listaProdutos);
    
    app.get('/produtos/adicionar', function(req, response){
        response.render("produtos/adiciona");
    });

    app.post('/produtos', function(req, response){
        var produto = req.body;
        var connection = app.infra.connectionFactory();
        
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.salva(produto, function(erros,resultados){
            response.redirect('/produtos');
        }); 
    });
}