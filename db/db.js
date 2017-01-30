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

// Get donations
exports.getDonations = function (callback) {
    var sql = "SELECT * FROM donation ";
    state.pool.query(sql, function (err, results) {
        // state.pool.release();
        if (err) {
            callback(treatError(err));
            return;
        }
        callback(treatData(results));
    });
};

function treatData(data) {
    var response = {};
    if (data) {
        response.data = data;
        response.msg = 'ok';
        return response;
    } else {
        response.msg = 'something went wrong';
        return response;
    }
};

function treatError(err) {
    var response = {};
    response.error = err.code;
    return response;
};