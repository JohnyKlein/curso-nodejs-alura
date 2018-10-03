var express = require('express');
var load = require('express-load');
var body = require('body-parser');

module.exports = function() {
    var app = express();

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use(body.urlencoded({extended:true}))

    load('routes', {cwd:'app'})
    .then('infra')
    .into(app);

    return app;
}