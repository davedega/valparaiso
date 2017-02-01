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
        db.newActivity(activityName, function (response) {
            callback(response);
        });
    },
    getDonations: function (callback) {
        db.getDonations(function (response) {
            callback(response)
        });
    },
    newPirate: function (email, password, gender, callback) {
        console.log("DAO, newUser: email" + email);
        console.log("DAO, newUser:" + password);
        console.log("DAO, gender: gender" + gender);
        
        db.newPirate(email, password, gender, function (response) {
            callback(response)
        });
    }
}