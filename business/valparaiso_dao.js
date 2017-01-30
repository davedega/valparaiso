/**
 * Created by davedega on 13/12/16.
 */
var db = require('./../db/db.js');

module.exports = {

    getGoods: function (callback) {
        db.getGoods(function (response) {
            callback(response)
        });
    },
    getActivities: function (callback) {
        console.log("DAO, getActivities");
    },
    getDonations: function (callback) {
        db.getDonations(function (response) {
            callback(response)
        });
    },
    getProjects: function (callback) {
        console.log("DAO, getProjects ");
    },
    newGood: function (goodName, callback) {
        console.log("DAO, newGood");
        responseDao = 'new good called: ' + goodName;
        callback(responseDao);
    },
    newProject: function (projectName, callback) {
        console.log("DAO, newProject");
        responseDao = 'new project called: ' + projectName;
        callback(responseDao);
    },
    newActivity: function (activityName, callback) {
        console.log("DAO, insert newActivity: " + activityName);
        responseDao = 'new activity called: ' + activityName;
        callback(responseDao);
    },
    newUser: function (username, password, callback) {
        console.log("DAO, newUser: user" + username);
        console.log("DAO, newUser: password" + password);
        responseDao = 'new user: ' + username + ' and password: ' + password;
        callback(responseDao);
    }
}