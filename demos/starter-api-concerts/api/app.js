var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

//Importer les routers

const routerConcerts = require('./routes/concerts');
const routerAuth = require('./routes/authentification');
const routerReservations = require('./routes/reservations');

var app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Enregistrement des routes
 */

//Enregistrement d'un middleware actif uniquement en env de dev
//Si on veut autoriser une application web à lire la réponse,
//il faut moduler la SOP avec une politique CORS plus permissive.
//Autoriser les requêtes Cross Origin (CORS Policy)
if (process.env && process.env.ENV == 'dev') {
  app.use((req, res, next) => {
    //En production, on n'autorisera pas l'accès aux autres sites web à notre API ainsi, sans aucune restriction
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    next();
  })
}

app.use(routerConcerts, routerAuth, routerReservations);

//Ajouter Allow-Cross-Origin-Ressource

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('Error');
});

module.exports = app;
