const path = require('path');
const exphbs = require('express-handlebars');
const morgan = require('morgan');
const express = require('express')
const routes = require('../routes/index')

module.exports = app => {

    const port = process.env.PORT || 443;

    // Server Init

    app.set('port', port);

    // Config Views

    app.set('views', path.join(__dirname, '../views'));

    app.engine('.hbs', exphbs.engine({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'patials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs',
        helpers: require('./helpers')
    }));

    app.set('view engine', '.hbs');

    // middlerwares

    app.use(morgan('dev'))
    app.use(express.urlencoded({extended: false}))

    // Routes

    routes(app)

    // static files

    app.use('/public', express.static(path.join(__dirname, '../public/')))
    app.use('/.well-known', express.static(path.join(__dirname, '../../.well-known/')))

    return app;
}
