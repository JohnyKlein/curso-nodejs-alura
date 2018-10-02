var app = require('./config/express')();

app.get('/produtos', function(require, response){
    response.render("produtos/lista");
});

app.listen(3000, function(){
    console.log("Servidor rodando!");
});