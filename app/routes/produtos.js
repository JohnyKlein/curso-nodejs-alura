module.exports = function(app) {
    app.get('/produtos', function(require, response){
        response.render("produtos/lista");
    });
}