/**
 * Created by davedega on 17/12/16.
 */
var mysql = require('mysql');

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'davedega',
    password        : 'dav3d3ga',
    database        : 'valparaiso'
});


// Get all goods
exports.getAllGoods = function(city, callback) {
    var sql = "SELECT * FROM goods ";
    // get a connection from the pool
    pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback(true); return; }
        // make the query
        connection.query(sql, [city], function(err, results) {
            connection.release();
            if(err) { console.log(err); callback(true); return; }
            callback(false, results);
        });
    });
};

exports.inserttUser = function(city, callback) {
    var sql = "SELECT * FROM goods ";
    // get a connection from the pool
    pool.getConnection(function(err, connection) {
        if(err) { console.log(err); callback(true); return; }
        // make the query
        connection.query(sql, [city], function(err, results) {
            connection.release();
            if(err) { console.log(err); callback(true); return; }
            callback(false, results);
        });
    });
};
