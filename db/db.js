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

exports.newActivity = function (activityName, callback) {
//aqui le sigo 
}

// Insert new pirate
exports.newPirate = function (email, password, gender, callback) {
    var sql = "INSERT INTO pirate SET ?";
    var values = {
        pirateid: null,
        email: email,
        password: password,
        gender: gender
    };
    state.pool.query(sql, values, function (err, results, fields) {
        // state.pool.release();
        if (err) {
            callback(treatError(err));
            return;
        }
        console.log(results.insertId);
        callback(treatData(results));
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
    response.msg = err.message;
    return response;
};