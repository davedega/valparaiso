/**
 * Created by davedega on 13/12/16.
 */
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json');
    res.header('Access-Control-Allow-Headers', 'skip, limit');
    next();
});

/**
 * The domain in which the server will be anwsering.
 * */
var SERVER_NAME = "localhost";

/**
 * The port in which the server will be anwsering.
 * */
var PORT = 4000;

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'davedega',
    password: 'dav3d3ga',
    database: 'valparaiso'
})




connection.connect(function (err) {
    (err) ? error(err) : success(app);
})


function error(err) {
    console.log('Unable to connect to Mysql. '+err);
    process.exit(1);
}

function success(app) {
    console.log('Connected to "' + connection.config.database+'"');
    app.listen(PORT, SERVER_NAME, function () {
        console.log("Listening on port " + PORT);
        require('./routes/routes.js')(app);
    });
    // Logger.setLevel(LOG_LEVEL);
}