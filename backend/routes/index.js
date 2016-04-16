var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cute Baby' });
});

router.post('/feed', function(req, res){actionlogger('feed', req, res);});
router.post('/poop', function(req, res){actionlogger('poop', req, res);});
router.post('/sleep', function(req, res){actionlogger('sleep', req, res);});
router.post('/hugsleep', function(req, res){actionlogger('hugsleep', req, res);});
router.post('/feedsleep', function(req, res){actionlogger('feedsleep', req, res);});
router.post('/wake', function(req, res){actionlogger('wake', req, res);});

function actionlogger(actionName, req, res) {
    // Set our internal DB variable
    var db = req.db;

    // Set our collection
    var collection = db.get('actionlog');
    var currentTime = new Date().toString();

    // Submit to the DB
    collection.insert({
        "action" : actionName,
        "timestamp" : currentTime
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.status(500).json({error : 'Insert Failed'});
        }
        else {
            // And forward to success page
            res.json({success : 'cool'});
        }
    });
}

module.exports = router;
