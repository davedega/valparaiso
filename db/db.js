/**
 * Created by davedega on 17/12/16.
 */
var mysql = require('mysql');

var state = {
    pool: null
};

exports.sayhello = function () {
    console.log('hi madafackas from underwater');
};

exports.connect = function (conf, res) {
    console.log('connectiong...');
    if (state.pool) return res()
    var pool = mysql.createPool(conf);

    pool.getConnection(function (err, connection) {
        if (err) return res(err)
        state.pool = connection
        res()
    });
};
// Get goods
exports.getGoods = function (callback) {
    var response = {};
    var sql = "SELECT * FROM goods ";
    state.pool.query(sql, function (err, results) {
        // state.pool.release();
        if (err) {
            response.error = err.code;
            callback(response);
            return;
        }
        callback(results);
    });
};
// Get donations
exports.getDonations = function (callback) {
    var response = {};
    var sql = "SELECT * FROM donation ";
    state.pool.query(sql, function (err, results) {
        // state.pool.release();
        if (err) {
            response.error = err.code;
            callback(response);
            return;
        }
        callback(results);
    });
};

exports.inserttUser = function (city, callback) {
    var sql = "SELECT * FROM goods ";
    // get a connection from the pool
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log(err);
            callback(true);
            return;
        }
        // make the query
        connection.query(sql, [city], function (err, results) {
            connection.release();
            if (err) {
                console.log(err);
                callback(true);
                return;
            }
            callback(false, results);
        });
    });
};
