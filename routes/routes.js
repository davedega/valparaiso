/**
 * Created by davedega on 13/12/16.
 */
var dao = require('../business/valparaiso_dao.js');
// var fs = require('fs');

module.exports = function (app) {
    console.log("initializing routes...");

    app.use(function (req, res, next) {
        // res.header('Access-Control-Allow-Credentials', 'true');
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, unit, limit, qty, skip');
        res.header('Access-Control-Allow-Origin', '*');
        next();
    });

    //sign up
    app.post('/signup', function (req, res) {
            console.log('/signup called with following params: ');
            var mUser = req.body.username;
            var mPass = req.body.password
            console.log('user' + mUser);
            console.log('pass' + mPass);
            dao.newUser(mUser, mPass, function (response) {
                res.send(JSON.stringify({'msg': response}));
            });

        }
    );

    //login
    app.post('/login', function (req, res) {
            console.log('/login called with following params: ');
            var mUser = req.body.username;
            var mPass = req.body.password
            console.log('user' + mUser);
            console.log('pass' + mPass);
            res.send(JSON.stringify({'user': mUser, "pass": mPass}));
        }
    );

    //register good
    app.post('/newGood', function (req, res) {
            console.log('/newGood called with following params: ');
            var mGood = req.body.goodname;
            console.log('mGood' + mGood);
            dao.newGood(mGood, function (response) {
                res.send(JSON.stringify(({'msg': response})));
            });
        }
    );
    //register proyect
    app.post('/newProject', function (req, res) {
            console.log('/newProject called with following params: ');
            var mProject = req.body.projectname;
            console.log('mProject' + mProject);
            dao.newProject(mProject, function (response) {
                res.send(JSON.stringify({'msg': response}));

            });
        }
    );
    //register activity
    app.post('/newActivity', function (req, res) {
            console.log('/newActivity called with following params: ');
            var mActivity = req.body.activityname;
            console.log('received: ' + mActivity);
            dao.newActivity(mActivity, function (response) {
                res.send(JSON.stringify({'msg:': response}));
            });
        }
    );

    //get all goods
    app.get('/goods', function (req, res) {
        // var mQty = parseInt(req.get("qty"));
        dao.getGoods(function (response) {
            res.send(JSON.stringify({'msg': response}));
        });
    });

    //get all projects
    app.get('/projects', function (req, res) {
        // var mQty = parseInt(req.get("qty"));
        dao.getProjects(function (response) {
            res.send(JSON.stringify({'msg': response}));
        });
    });

    //get all activities
    app.get('/activities', function (req, res) {
        // var mQty = parseInt(req.get("qty"));
        dao.getActivities(function (response) {
            res.send(JSON.stringify({'msg': response}));
        });
    });

    //get donations
    app.get('/donations', function (req, res) {
        // var mQty = parseInt(req.get("qty"));
        dao.getDonations(function (response) {
            res.send(JSON.stringify(response));
        });
    });

    app.get('/logout', function (req, res) {
        res.send(JSON.stringify({'msg': "good bye :)"}));
    });
};

function getFormattedTime() {
    var time = new Date();
    time = time.toString().replace(/\s+/g, '_');
    time = time.toString().replace(/:+/g, '_');
    time = time.toString().replace(/\(/, '_');
    time = time.toString().replace(/\)/, '_');
    return time;
};

//endregion
