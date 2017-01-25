/**
 * Created by davedega on 13/12/16.
 */
module.exports = {

    getGoods: function (callback) {
        console.log("DAO, getGoods");
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
        callback(responseDao);
    },
    newUser: function (username, password, callback) {
        console.log("DAO, newUser: user" + username);
        console.log("DAO, newUser: password" + password);
        responseDao = 'new user: ' + username + ' and password: ' + password;
        callback(responseDao);
    }
}