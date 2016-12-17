/**
 * Created by davedega on 13/12/16.
 */
var mysql = require('mysql');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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


app.listen(PORT, SERVER_NAME, function () {
    require('./routes/routes.js')(app);
    console.log("App successfully started");
});

// connection.connect(function(err) {
//     if (err) throw err
//     console.log('You are now connected...')
// })


function error(err) {
    console.log('Unable to connect to Mysql.');
    process.exit(1);
}

function success(app) {
    require('./routes/routes.js')(app, PATH_PREFIX, DEBUG);
    var dao = require('./business/dashboard_dao.js');
    dao.setDebug(DEBUG);

    console.log("Connected to MongoDB " + getUrlDataBase());
    Logger.setLevel(LOG_LEVEL);
    app.listen(PORT, SERVER_NAME, function () {
        console.log("App successfully started");
    });
}