const express = require('express');
const expressValidator = require('express-validator');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const passport = require('passport');
const fs = require('fs');
const expressJwt = require('express-jwt');
const load = require('express-load');
const localStrategy = require('passport-local').Strategy;
const app = express();
const server = require('http').Server(app);
const log = require('./logger');

app.use(expressValidator());
app.config = require('./config')[process.env.NODE_ENV || 'development'];
mongoose.Promise = require('bluebird');

/** Passport cofig  -- Module that encrypts passwords **/
let accountsSchema = require('./app_modules/accounts/accounts.schema');
passport.use(new localStrategy(accountsSchema.authenticate()));
passport.serializeUser(accountsSchema.serializeUser());
passport.deserializeUser(accountsSchema.deserializeUser());

// Setting up headers
app.set('showStackError', true);

app.set('port', app.config.port);

// app.use(express['static'](`${app.config.root}/public`));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});

app.use(passport.initialize());

app.use(passport.session());

// Log every request to the console
app.use(morgan('dev'));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// Parse aplication/json
app.use(bodyParser.json());

// Simulate DELETE and PUT
app.use(methodOverride());

// Encrypt specific routes
app.use('/private', expressJwt({
    secret: app.config.secret_key
}));

app.use(bodyParser.json({
    limit: '50mb'
}));

app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
}));

// Initialize app_modules
load('app_modules', { extlist: ['.route.js'] })
    .into(app);

// Catch exceptions and logs to files
process.on('UncaughtException', error => {
    log.error('¡Uncaught Exception!');
    log.error(error.stack);
    log.error(new Date());
});

// Connecting to a database
mongoose
    .connect(`${app.config.db.url}:${app.config.db.port}/${app.config.db.name}`)
    .then(() => {
        log.info(`MongoDB connected to ${app.config.db.name} on port ${app.config.db.port}`);
    }, err => {
        log.error(`Error connecting to database. ${err}`);
    });

// Log server is running
server.listen(app.config.port, () => {
    log.info(`${app.config.name} server running on http://localhost:${app.config.port}`);
});